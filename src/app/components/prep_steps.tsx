import { ArrowDown } from "react-feather";

export default function PrepSteps() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h2 className="font-bold text-xl text-rose-700 text-center">
        Preparing a quilt for Longarm Quilting
      </h2>
      <div className="card border border-black shadow-offset-black mt-10">
        <div className="card-top flex flex-col">
          <div className="flex">
            <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
              <div className="card-number text-xl">1.</div>
              <h2 className="text-xl">Materials</h2>
            </div>
          </div>
          <div className="text-lg px-5 py-3">
            <p className="leading-7">
              Bring your quilt in 3 separate pieces - Top, Wadding and Backing.
              If you're unsure of what these are, you can see a glossary for
              these terms{" "}
              <a
                href="https://www.nationalquilterscircle.com/post/glossary-of-quilting-terms/"
                target="_blank"
                className="text-blue-500"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <ArrowDown />
      <div className="card border border-black shadow-offset-black">
        <div className="card-top flex flex-col">
          <div className="flex">
            <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
              <div className="card-number text-xl">2.</div>
              <h2 className="text-xl">Size Requirements</h2>
            </div>
          </div>
          <div className="text-lg px-5 py-3">
            <p className="leading-7 pb-2">
              Have the backing and wadding 4 inches wider on all sides. For
              example, for an <span className="font-bold">80" x 80"</span>{" "}
              quilt, the backing and wadding should measure{" "}
              <span className="font-bold">88" x 88"</span>.
            </p>
            <p className="leading-7">
              This 4" allowance ensures that the backing and wadding adequately
              cover the entire quilt top.
            </p>
          </div>
        </div>
      </div>
      <ArrowDown />
      <div className="card border border-black shadow-offset-black">
        <div className="card-top flex flex-col">
          <div className="flex">
            <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
              <div className="card-number text-xl">3.</div>
              <h2 className="text-xl">Shape</h2>
            </div>
          </div>
          <div className="text-lg px-5 py-3">
            <p className="leading-7">
              Your backing should be square with two straight edges for pinning
              on and mark the top and bottom if required.
            </p>
          </div>
        </div>
      </div>
      <ArrowDown />
      <div className="card border border-black shadow-offset-black">
        <div className="card-top flex flex-col">
          <div className="flex">
            <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
              <div className="card-number text-xl">4.</div>
              <h2 className="text-xl">Final Prep</h2>
            </div>
          </div>
          <div className="text-lg px-5 py-3">
            <p className="leading-7">
              When bringing your own backing, it should be the appropriate size
              or if it needs to be joined, please do so before dropping your
              quilt off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
