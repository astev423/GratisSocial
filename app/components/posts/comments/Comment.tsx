type CommentProps = {
  content: string;
  commenterUsername: string;
};

export default function Comment({ content, commenterUsername }: CommentProps) {
  return (
    <div>
      <div>{commenterUsername} says: </div>
      <div>{content}</div>
    </div>
  );
}
