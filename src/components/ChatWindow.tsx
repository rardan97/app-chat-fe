import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

export default function ChatWindow() {
  return (
    <div className="flex-1 h-screen flex flex-col ">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1.5 m-5">
        <ChatMessage message="Hi there! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" from="them" time="11:58" />
        <ChatMessage message="Hello! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" from="me" time="12:00" status="read" />
      </div>
      <ChatInput />
    </div>
  );
}