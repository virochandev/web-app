export default function AppHeadline() {
  return (
    <div className="flex gap-1 pt-5 pb-3">
      <img src="/images/logo.png" className="h-12"/>
      <h1 className="text-2xl sm:text-5xl lg:text-6xl font-[MeshedDisplay] font-black text-slate-800 tracking-tight leading-tight">
        <span className="text-orange-600">Its</span>
        <span
          className="bg-[radial-gradient(circle,#1617dc,#1718a5,#fff)] bg-clip-text text-transparent"
        >
          My
        </span>
        <span className="text-green-700">Gram</span>
      </h1>
    </div>
  );
}
