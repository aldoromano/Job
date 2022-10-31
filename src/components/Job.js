const Job = (props) => {
  return (
    <>
      <div className={props.className}>
        {" "}
        <p className="title-item">{props.title}</p>{" "}
        <p className="bottom-item">
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </>
  );
};

export default Job;
