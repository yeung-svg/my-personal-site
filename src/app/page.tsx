"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Mail,
  MessageCircle,
  Calendar,
  Rocket,
  X,
  ArrowRight
} from "lucide-react";

const stats = [
  { label: "合作 IP", value: "100+", sub: "深度连接" },
  { label: "触达流量", value: "1.2亿+", sub: "全网流量" },
  { label: "连续创业", value: "2015-2026", sub: "创业老炮" },
  { label: "我的母题", value: "主体性IP+AI", sub: "实战演进" },
];

const timeline = [
  {
    title: "一人公司",
    date: "2022 - 至今",
    desc: "打造「多维造物」，专注IP&品牌打造、AI应用、商业闭环咨询与社群陪跑。",
    icon: Rocket
  },
  {
    title: "联合创业",
    date: "2015 - 2021",
    desc: "联创「乐蚁传媒」，年均GMV500-1000万，开启微信+视频营销时代。",
    icon: TrendingUp
  },
  {
    title: "北漂时代",
    date: "2010 - 2013",
    desc: "通讯&留学行业，内容运营&产品策划落地，开启微博+PC营销时代。",
    icon: MessageCircle
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 max-w-2xl mx-auto space-y-12">
      <section className="space-y-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 mx-auto"
        >
          <div className="w-full h-full rounded-[1.4rem] bg-zinc-900 flex items-center justify-center overflow-hidden">
            {/* 注意：这里改成了您仓库里的真实文件名 */}
            <img src="/IMG_9555.JPG" className="w-full h-full object-cover" alt="杨sir" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight">杨sir | 商业思考</h1>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-zinc-400">
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">85后</span>
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">个体创业者</span>
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">AIP商业社群</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl text-center"
        >
          <p className="text-zinc-300 italic">"我是杨sir，期待我们一起共同实战——专注极致、长期复利"</p>
        </motion.div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-1 group hover:border-yellow-500/50 transition-colors"
          >
            <p className="text-2xl font-bold text-yellow-500">{stat.value}</p>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-xs text-zinc-500">{stat.sub}</p>
          </motion.div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5 text-yellow-500" />
          职业历程
        </h2>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                  <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-yellow-500" />
                </div>
                {index !== timeline.length - 1 && <div className="w-px h-full bg-zinc-800 my-2" />}
              </div>
              <div className="pb-8 space-y-1 flex-1">
                <p className="text-xs text-yellow-500 font-medium">{item.date}</p>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          业务范围
        </h2>
        <div className="grid gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">B 端：品牌出海</h3>
                <p className="text-sm text-zinc-400 mt-1">助力商家产品全球化，高效推广与渠道对接。</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-zinc-800">
              <div>
                <h3 className="font-bold text-lg">C 端：IP 打造</h3>
                <p className="text-sm text-zinc-400 mt-1">专注素人账号全案孵化，跑通内容与商业闭环。</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 pb-20">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Mail className="w-5 h-5 text-yellow-500" />
          联系方式
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            私域联系
          </button>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-zinc-900">
        <p className="text-xs text-zinc-600">© 2026 杨sir. 极致专注，长期复利。</p>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-zinc-900 p-6 rounded-3xl border border-zinc-800 max-w-sm w-full text-center space-y-4"
            >
              <h3 className="text-xl font-bold">扫码添加私域</h3>
              <div className="bg-white p-2 rounded-2xl mx-auto w-64 h-64 overflow-hidden">
                <img src="/my-qrcode.jpg" alt="QR Code" className="w-full h-full object-cover" />
              </div>
              <p className="text-zinc-400 text-sm">期待与您深度交流</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full p-1 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
