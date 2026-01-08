const ArticleDetailsSkeleton = () => {
  return (
    <article className="mx-auto max-w-3xl animate-pulse">
      {/* Back */}
      <div className="mb-6 h-4 w-16 rounded bg-gray-200" />

      {/* Category */}
      <div className="h-4 w-24 rounded bg-gray-200" />

      {/* Title */}
      <div className="mt-3 space-y-3">
        <div className="h-8 w-full rounded bg-gray-200" />
        <div className="h-8 w-3/4 rounded bg-gray-200" />
      </div>

      {/* Meta */}
      <div className="mt-4 flex gap-3">
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="h-4 w-16 rounded bg-gray-200" />
      </div>

      {/* Image */}
      <div className="my-8 h-72 w-full rounded-xl bg-gray-200" />

      {/* Content */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-11/12 rounded bg-gray-200" />
        <div className="h-4 w-10/12 rounded bg-gray-200" />
        <div className="h-4 w-9/12 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
      </div>
    </article>
  );
};

export default ArticleDetailsSkeleton;
