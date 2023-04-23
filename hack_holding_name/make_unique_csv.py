import pandas as pd


def main():
    """company.csvから重複を削除し、company-unique.csvに書き込む"""
    filename = "company.csv"

    # CSVファイルを読み込む
    df = pd.read_csv(filename)

    # name列で重複した行を削除し、最初の行だけ残す
    df.drop_duplicates(subset="name", keep="first", inplace=True)
    df["count"] = 1

    # 結果をファイルに書き込む
    output_filename = "company-unique.csv"
    df.to_csv(output_filename, index=False)


if __name__ == "__main__":
    main()
