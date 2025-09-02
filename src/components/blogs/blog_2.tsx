export default function BlogReadPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
      {/* Container */}
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Blog Cover Image */}
        <div className="w-full h-72 bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1604014237744-5f4f74a7e8da"
            alt="UI Design Inspiration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Design Tips for Stunning UIs
          </h1>

          {/* Meta Info */}
          <div className="mt-4 text-gray-500 text-sm flex items-center gap-4">
            <span>By David Memba</span>
            <span>•</span>
            <span>March 15, 2025</span>
          </div>

          {/* Article Body */}
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Crafting a stunning user interface (UI) isn’t just about making
              something look pretty—it’s about creating an experience that feels
              intuitive, engaging, and enjoyable. A well-designed UI should
              guide users naturally through your product, making every
              interaction seamless and meaningful.
            </p>
            <p>
              <strong>1. Prioritize Clarity Over Complexity</strong>
              <br />
              Simplicity is your best friend in design. Avoid clutter and keep
              only the essential elements visible. A clean layout ensures users
              focus on what matters without unnecessary distractions.
            </p>
            <p>
              <strong>2. Use Color With Purpose</strong>
              <br />
              Colors should not only be aesthetically pleasing but should also
              communicate meaning. Use a consistent color palette, highlight
              important actions with contrast, and ensure accessibility for all
              users.
            </p>
            <p>
              <strong>3. Typography Sets the Tone</strong>
              <br />
              Fonts are more than just text—they convey personality. Choose
              fonts that match your brand’s voice, maintain readable sizes, and
              use hierarchy to guide attention.
            </p>
            <p>
              <strong>4. Consistency is Key</strong>
              <br />
              Repeating design patterns—such as button styles, icon shapes, and
              spacing—helps users feel comfortable. Consistency creates trust,
              and trust keeps users engaged.
            </p>
            <p>
              <strong>5. Add Micro-Interactions</strong>
              <br />
              Subtle animations and feedback when users click a button or hover
              over an element make your UI feel alive. They create a sense of
              responsiveness and delight without overwhelming the user.
            </p>
            <p>
              In the end, stunning UI design is about balance—combining
              aesthetics, usability, and emotional impact. Keep iterating,
              gather feedback, and never stop refining your craft.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
