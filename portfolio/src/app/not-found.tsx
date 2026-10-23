import { SmartLink } from "@/components/SmartLink";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="section py-24">
      <p className="eyebrow mb-3">404</p>
      <h1 className="h-display max-w-3xl text-[2.25rem] sm:text-5xl">That page does not exist</h1>
      <p className="lede mt-5 max-w-xl">The link may be old. Start from the home page or go straight to the work.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <SmartLink href="/" className="btn-primary">
          Home <ArrowIcon width={18} height={18} />
        </SmartLink>
        <SmartLink href="/projects/" className="btn-ghost">
          Projects
        </SmartLink>
      </div>
    </section>
  );
}
