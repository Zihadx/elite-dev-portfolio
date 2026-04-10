export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4">
      <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-indigo-500" />
      </div>
    </div>
  );
}
