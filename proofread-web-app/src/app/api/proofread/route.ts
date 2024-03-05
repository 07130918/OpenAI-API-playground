import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { NextRequest, NextResponse } from 'next/server';

import { assistantTemplate, userTemplate } from '../../../lib/templates';

type ReqBody = {
    journal: string;
    secret: string;
};

// 学習したい言語
const LANGUAGE = 'English';

export async function POST(req: NextRequest) {
    const reqBody: ReqBody = await req.json();
    const openAIApiKey =
        reqBody.secret === process.env.PASSWORD ? process.env.OPENAI_API_KEY! : reqBody.secret;

    const model = new OpenAI({ openAIApiKey, temperature: 0.8 });
    const assistantPrompt = SystemMessagePromptTemplate.fromTemplate(assistantTemplate);
    const userPrompt = HumanMessagePromptTemplate.fromTemplate(userTemplate);
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([assistantPrompt, userPrompt]);

    const chain = new LLMChain({ llm: model, prompt: chatPrompt });
    const response = await chain.call({ language: LANGUAGE, journal: reqBody.journal });
    const proofreadJournal = response.text;

    return NextResponse.json(proofreadJournal);
}
