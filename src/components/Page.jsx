import Profile from "./Profile";

function Page(props) {
  return <Profile username={props.username} setUsername={props.setUsername} />;
}
export default Page;
