import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
    const override = {
        display: "block",
        margin: "20px auto",
        borderColor: "red",
      };

    let loading = true;
    let color = "#07fc07";
  return (
    <div>
    <HashLoader
        className="loader"
        color={color}
        loading={loading}
        cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader