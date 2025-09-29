import React from 'react';
import '../style.css';

export default function StyleGuide ()
{
    return (
        <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
            <header className="text-center section container">
                <h1 className="text-5xl font-medium text-[--color-primary]">Visual Style Guide</h1>
            </header>

            {/* Typography */ }
            <section className='section container'>
                <h2 className="text-3xl font-medium mb-6 text-[--color-primary]">Typography</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4 text-[--color-primary]">
                    <h1 className="text-[--color-primary] text-[85px] font-medium leading-tight">Heading 1</h1>
                    <h2 className="text-[65px] font-medium leading-tight">Heading 2</h2>
                    <h3 className="text-[26px] font-medium">Heading 3</h3>
                    <h4 className="text-[24px] font-semibold">Heading 4</h4>
                    <h5 className="text-[18px] font-semibold">Heading 5</h5>
                    <h6 className="text-[16px] font-normal">Heading 6</h6>
                    <p className="text-base">This is a normal paragraph with default body font.</p>
                    <p className="font-medium">This is medium text (font-weight 500)</p>
                    <p className="font-semibold">This is bold text (font-weight 600)</p>
                </div>
            </section>



            {/* Buttons */ }
            <section className='section container'>
                <h2 className="text-3xl font-medium mb-6 text-[--color-primary]">Buttons</h2>
                <div className="space-x-4">
                    <button className="button">Primary Button</button>
                    <button
                        className="button"
                        style={ {
                            backgroundColor: 'transparent',
                            color: 'var(--color-primary)',
                            borderColor: 'var(--color-primary)',
                        } }
                    >
                        Secondary Style
                    </button>
                </div>
            </section>

            {/* Links */ }
            <section className='section container'>
                <h2 className="text-3xl font-medium mb-6 text-[--color-primary]">Links</h2>
                <p className="text-lg">
                    Visit my <a href="#" className="underline hover:text-[--color-accent]">homepage</a> or{ ' ' }
                    <a href="#" className="underline hover:text-[--color-accent]">contact me</a>.
                </p>
            </section>

            {/* Color Palette */ }
            <section className='section container'>
                <h2 className="text-3xl font-medium mb-6 text-[--color-primary]">Color Palette</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    { [
                        [ 'Primary', '--color-primary' ],
                        [ 'Accent', '--color-accent' ],
                        [ 'Text', '--color-text' ],
                        [ 'Background', '--color-bg' ],
                        [ 'White', '--color-white' ],
                        [ 'Highlight', '--color-highlight' ],
                    ].map( ( [ label, varName ] ) => (
                        <div key={ varName } className="text-center">
                            <div
                                className="w-full h-16 rounded shadow"
                                style={ { backgroundColor: `var(${ varName })` } }
                            ></div>
                            <p className="mt-2 text-sm font-medium">{ label }</p>
                            <code className="text-xs text-gray-500">{ varName }</code>
                        </div>
                    ) ) }
                </div>
            </section>

            {/* Form */ }
            <section className='section container'>
                <h2 className="text-3xl font-medium mb-6 text-[--color-primary]">Form Elements</h2>
                <form className="space-y-6 max-w-md">
                    <div>
                        <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                        <input type="text" id="name" className="w-full border border-[--color-primary] p-2" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                        <input type="email" id="email" className="w-full border border-[--color-primary] p-2" placeholder="jane@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-semibold mb-1">Message</label>
                        <textarea id="message" rows="4" className="w-full border border-[--color-primary] p-2" placeholder="Say hello..."></textarea>
                    </div>
                    <button type="submit" className="button">Send</button>
                </form>
            </section>
        </main>
    );
}
