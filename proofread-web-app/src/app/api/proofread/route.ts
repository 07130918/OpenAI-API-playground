import { assistantTemplate, userTemplate } from '@/lib/templates';
import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { NextRequest, NextResponse } from 'next/server';

// 学習したい言語
const LANGUAGE = 'English';

export async function POST(req: NextRequest) {
    try {
        const reqBody: { journal: string } = await req.json();
        const model = new OpenAI({
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0.9,
        });

        const assistantPrompt = SystemMessagePromptTemplate.fromTemplate(assistantTemplate);
        const userPrompt = HumanMessagePromptTemplate.fromTemplate(userTemplate);
        const chatPrompt = ChatPromptTemplate.fromMessages([assistantPrompt, userPrompt]);

        const chain = new LLMChain({ llm: model, prompt: chatPrompt });
        const response = await chain.call({ language: LANGUAGE, journal: reqBody.journal });
        return NextResponse.json(response.text);
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
