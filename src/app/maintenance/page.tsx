import Image from 'next/image';

export default function Maintenance() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-20 py-4 px-8">
        <Image src="/logo.svg" alt="logo" width={135} height={64} priority />
      </header>
      <main className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-center p-8 lg:p-24">
        <section className="flex flex-col">
          <h1>Under Maintenance</h1>
          <p>
            We are hard at work upgrading our technology and features to save your time. We’ll be back by 8:00 PM CET with some awesome updates.
            <br />
            Thank you for your understanding.
          </p>
        </section>
        <section>
          <Image src="/under-constructions.png" alt="under construction" width={480} height={480} priority />
        </section>
      </main>
    </div>
  );
}
