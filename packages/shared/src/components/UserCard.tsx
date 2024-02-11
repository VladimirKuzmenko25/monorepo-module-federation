export const UserCard = ({ userName = "user" }: { userName?: string }) => {
  return (
    <div style={{ border: "1px solid green", padding: 20 }}>
      <div>userName: {userName}</div>
      <div>password: 123</div>
    </div>
  );
};
