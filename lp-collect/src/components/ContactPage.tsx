import React, { useState } from "react";
import {
  Send,
  User,
  Building,
  Mail,
  MessageSquare,
  Twitter,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `お問い合わせ: ${formData.name}様 (${formData.company})`;
    const body = `名前: ${formData.name}\n会社名: ${formData.company}\nメール: ${formData.email}\n\n本文:\n${formData.message}`;
    // Open default mail client
    window.location.href = `mailto:yuuki8867@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            CONTACT
          </h1>
          <p className="text-slate-400">
            プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください。
            <br />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Panel */}
          <div className="md:col-span-1 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                  <span className="text-sm">hello@nextgenworks.ai</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Twitter className="w-5 h-5 text-neon-cyan" />
                  <span className="text-sm">@NextGenWorks</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-purple-500/10 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">
                AI Development
              </h3>
              <p className="text-slate-400 text-sm">
                弊社ではGoogle
                Geminiなどの最新LLMを活用した開発支援も行っています。技術的なご相談も歓迎です。
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-300 flex items-center gap-2">
                    <User className="w-4 h-4" /> お名前{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-300 flex items-center gap-2">
                    <Building className="w-4 h-4" /> 会社名
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="株式会社NextGen"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> メールアドレス{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> お問い合わせ内容{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="LP制作の相談をしたいのですが..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative bg-white text-black font-bold py-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  メールを送信する{" "}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>

              <p className="text-xs text-slate-500 text-center">
                ※送信ボタンを押すと、お使いのメールソフトが起動します。
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
