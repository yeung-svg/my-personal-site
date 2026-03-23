"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  PlayCircle, 
  ArrowRight, 
  Mail, 
  MessageCircle, 
  Award,
  Calendar,
  Rocket
} from "lucide-react";

const stats = [
  { label: "GMV", value: "3000万", sub: "半年内创造" },
  { label: "孵化粉丝", value: "50W+", sub: "全网累计" },
  { label: "内容合作 IP", value: "100+", sub: "深度连接" },
  { label: "播放量", value: "1.8亿+", sub: "全网触达" },
];

const timeline = [
  {
    title: "个人创业",
    date: "2025 - 至今",
    desc: "创办 繁森文化，专注于品牌建设、产品出海与资源整合。",
    icon: Rocket
  },
  {
    title: "电商运营",
    date: "2022 - 2024",
    desc: "担任电商运营负责人，孵化多名主播，创造 3000 万业绩。",
    icon: TrendingUp
  },
  {
    title: "情感主播",
    date: "早期经历",
    desc: "投身情感内容赛道，深耕直播互动，3个月实现 10w+ 收入。",
    icon: MessageCircle
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 max-w-2xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 mx-auto"
        >
          <div className="w-full h-full rounded-[1.4rem] bg-zinc-900 flex items-center justify-center overflow-hidden">
             {/* Placeholder for Profile Image */}
             <Users className="w-12 h-12 text-yellow-500" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight">莫森 | Emerson</h1>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-zinc-400">
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">04年</span>
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">ENTJ</span>
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">个人创业者</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl text-center"
        >
          <p className="text-zinc-300 italic">"我是莫森，期待和你一起日行千里、快速迭代"</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-1 group hover:border-yellow-500/50 transition-colors"
          >
            <p className="text-3xl font-bold text-yellow-500">{stat.value}</p>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-xs text-zinc-500">{stat.sub}</p>
          </motion.div>
        ))}
      </section>

      {/* Timeline Section */}
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
              <div className="pb-8 space-y-1">
                <p className="text-xs text-yellow-500 font-medium">{item.date}</p>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Section */}
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
                <h3 className="font-bold text-lg">C 端：IP 孵化</h3>
                <p className="text-sm text-zinc-400 mt-1">专注素人账号全案孵化，连接内容与商业闭环。</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6 pb-20">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Mail className="w-5 h-5 text-yellow-500" />
          联系方式
        </h2>
        <div className="flex gap-4">
          <button className="flex-1 bg-white text-black font-bold py-4 rounded-2xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            个人号私域
          </button>
          <button className="flex-1 bg-zinc-900 border border-zinc-800 text-white font-bold py-4 rounded-2xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            商务合作
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-zinc-900">
        <p className="text-xs text-zinc-600">© 2026 Merson. 日行千里，快速迭代。</p>
      </footer>
    </main>
  );
}
