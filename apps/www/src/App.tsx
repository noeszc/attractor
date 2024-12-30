import { Button } from "@attractor/ui";
function App() {
  return (
    <>
      <pre>App</pre>
      <Button
        loading
        onClick={() => {
          console.log("click");
        }}
      >
        click me
      </Button>
      <Button
        onClick={() => {
          console.log("click");
        }}
      >
        click me
      </Button>
    </>
  );
}

export default App;
