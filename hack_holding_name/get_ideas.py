import re

import openai

from config import OPENAI_API_KEY, PROMPT


def run():
    """gpt-3.5-turboからアイデアをもらう

    Note:
        1リクエスト約1円($0.002/1K tokens * 4 * 130)、分間3リクエストまで
    """
    openai.api_key = OPENAI_API_KEY
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": PROMPT}],
    )

    print("使用トークン: ", response["usage"]["total_tokens"])  # type: ignore
    answer = response["choices"][0]["message"]["content"]  # type: ignore

    company_name = ""
    origin_of_the_company_name = ""

    match = re.search(r"新グループ社名:\s*(.*?)\s*\((.*?)\)", answer)
    if match:
        company_name = f"{match.group(1)} ({match.group(2)})"

    match = re.search(r"社名の由来と社名への想い:\s*(.*)", answer)
    if match:
        origin_of_the_company_name = match.group(1)

    if company_name or origin_of_the_company_name:
        Exception("Failed to get an idea from openai api")

    print(company_name)
    return company_name, origin_of_the_company_name


if __name__ == "__main__":
    run()
