import Editor from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-white">
      DocumentIdPage: {documentId}
      <Editor></Editor>
    </div>
  );
};

export default DocumentIdPage;
