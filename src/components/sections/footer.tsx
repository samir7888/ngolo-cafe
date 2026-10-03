import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:justify-between md:px-8">
        <div>
          <p className="font-display text-3xl font-semibold">{site.shortName}</p>
          <p className="mt-1 text-paper/70">Cafe &amp; Bistro</p>
        </div>
        <div className="text-paper/80">
          <p>
            {site.address.street}, {site.address.locality}
          </p>
          <p>
            {site.address.district}, {site.address.countryName}
          </p>
          <p className="mt-3">
            <a href={site.phoneHref} className="underline underline-offset-4 hover:text-paper">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-paper/60 md:px-8">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
