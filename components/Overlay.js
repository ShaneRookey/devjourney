import Section from "./Section";

export const Overlay = () => {
    return (
        <div class="w-screen">
            <h1 className="h-screen animate-pulse text-center font-semibold font-serif text-2xl">Scroll down</h1>
            <Section>
                <h1 className="font-semibold font-serif text-2xl">
                    Hello, My name is Shane Rookey
                </h1>
                <p className="animate-bounce  mt-6">↓</p>
            </Section>
            <Section>
                <h1 className="font-semibold font-serif text-2xl">
                    Here are my skillsets 🔥
                </h1>
                <p className="text-gray-500">PS: I never test</p>
                <p className="mt-3">
                    <b>Frontend 🚀</b>
                </p>
                <ul className="leading-9">
                    <li>ReactJS</li>
                    <li>React Native</li>
                    <li>VueJS</li>
                    <li>Tailwind</li>
                </ul>
                <p className="mt-3">
                    <b>Backend 🔬</b>
                </p>
                <ul className="leading-9">
                    <li>NodeJS</li>
                    <li>tRPC</li>
                    <li>NestJS</li>
                    <li>PostgreSQL</li>
                </ul>
                <p className="animate-bounce  mt-6">↓</p>
            </Section>
            <Section>
                <h1 className="font-semibold font-serif text-2xl">
                    🤙 Call me maybe?
                </h1>
                <p className="text-gray-500">
                    I'm very expensive but you won't regret it
                </p>
                <p className="mt-6 p-3 bg-slate-200 rounded-lg">
                    📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
                </p>
            </Section>
        </div>
    );
};
