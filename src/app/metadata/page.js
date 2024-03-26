export default function Meta() {
  return (
    <div>
      <h1>We are here to generate meta data dynamically.</h1>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Generate Meta Data Page",
    decscription: "Generate Meta Data Decscription",
  };
}


// this function we use to generate meta data
// this helps in seo as with the generation of dynamic title it will show the page dynamically
// function name should be generateMetadata only
// for more practice or info read official doc