export default function Home() {
  return (
    <div id="contenu" className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="border border-solid border-red-700 col-span-9">Hello</div>
        <div className="border border-solid border-blue-700 col-span-3">World</div>
      </div>
    </div>
  )
}
