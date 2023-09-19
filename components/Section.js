export default function Section(props) {
    return (
        <section className="h-screen flex flex-col justify-center p-10 mr-96 items-end">
            <div className="w-1/2 flex items-center justify-center">
                <div className="w-full">
                    <div className="bg-transparent rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
)};