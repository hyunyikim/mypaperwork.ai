import MaintenanceDate from '@/components/MaintenanceDate';
import Image from 'next/image';

export default function Maintenance() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-20 lg:h-24 py-4 px-8">
        <Image src="/logo.svg" alt="logo" width={135} height={64} priority />
      </header>
      <main className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-4 p-8 lg:p-24">
        <section className="flex flex-col gap-4 lg:gap-8">
          <h1 className="text-3xl md:text-5xl font-semibold">Under Maintenance</h1>
          <p className="text-lg md:text-xl">
            We are hard at work upgrading our technology and features to save your time. <br />
            We’ll be back by <MaintenanceDate /> with some awesome updates.
            <br />
            Thank you for your understanding.
          </p>
        </section>
        <section>
          <Image src="/under-constructions.png" alt="under construction" width={480} height={480} priority />
        </section>
      </main>
      <div className="fixed bottom-0 -z-50 w-full">
        <Image src="/background.svg" alt="logo" layout="responsive" width={1440} height={138} />
      </div>
    </div>
  );
}
