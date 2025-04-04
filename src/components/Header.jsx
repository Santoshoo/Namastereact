export const Title = () => <h1 id="h1">Food Villa</h1>;

//react component

export const Header = () => {
  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
