"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, MessageCircle, Rocket, TrendingUp, Zap } from "lucide-react";

const stats = [
  { label: "合作 IP", value: "100+", sub: "深度连接" },
  { label: "触达流量", value: "1.2亿+", sub: "全网流量" },
  { label: "连续创业", value: "2015-2026", sub: "创业老炮" },
  { label: "我的母题", value: "主体性IP+AI", sub: "实战推演" },
];

const timeline = [
  {
    title: "一人公司",
    date: "2022 - 至今",
    desc: "打造「多维造物」，专注IP&品牌打造、AI应用、商业闭环咨询与社群陪跑",
    icon: Rocket
  },
  {
    title: "联合创业",
    date: "2015 - 2021",
    desc: "联创「乐蚁传媒」，开启微信+短视频营销时代，年均GMV500-1000万",
    icon: TrendingUp
  },
  {
    title: "北漂时代",
    date: "2010 - 2013",
    desc: "电子通讯&留学赛道，内容运营&产品策划落地，开启PC营销+微博10w+",
    icon: MessageCircle
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 max-w-2xl mx-auto space-y-12">
      <nav className="pt-8 flex flex-wrap justify-center gap-2 text-sm text-zinc-400">
        <a href="#timeline" className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 hover:border-yellow-500/50 transition-colors">
          职业历程
        </a>
        <a href="#services" className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 hover:border-yellow-500/50 transition-colors">
          业务范围
        </a>
        <a href="#contact" className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 hover:border-yellow-500/50 transition-colors">
          联系方式
        </a>
      </nav>

      <section className="space-y-6 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 mx-auto"
        >
          <div className="w-full h-full rounded-[1.4rem] bg-zinc-900 flex items-center justify-center overflow-hidden">
            <img src="my-avatar.JPG" className="w-full h-full object-cover" alt="杨sir" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight">杨sir</h1>
          <p className="text-sm md:text-base text-zinc-300">品牌增长 / IP 孵化 / AI 商业闭环陪跑</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-zinc-400 pt-2">
            <span className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">多维造物 | 创始人</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl text-center"
        >
          <p className="text-zinc-300 italic">"我是杨sir，期待我们共同实战——专注极致、长期复利"</p>
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

      <section id="timeline" className="space-y-6 scroll-mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6 text-yellow-500" />
          职业历程
        </h2>
        <div className="grid gap-4 text-left">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-yellow-500/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-yellow-500 font-medium">{item.date}</p>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="space-y-6 scroll-mt-24">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          业务范围
        </h2>
        <div className="grid gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">品牌营销增长</h3>
                <p className="text-sm text-zinc-400 mt-1">助力项目品牌影响力，高效推广与渠道对接。</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-zinc-800">
              <div>
                <h3 className="font-bold text-lg">AI+IP闭环陪跑</h3>
                <p className="text-sm text-zinc-400 mt-1">聚焦定位、内容、产品与转化，跑通可复利的商业闭环。</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Rocket className="w-5 h-5 text-yellow-500" />
          合作流程
        </h2>
        <div className="grid gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-2">
            <p className="text-sm font-medium text-yellow-500">01 / 对齐目标</p>
            <p className="text-sm text-zinc-400 leading-relaxed">明确业务阶段、核心诉求与目标指标，先对齐方向再投入资源。</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-2">
            <p className="text-sm font-medium text-yellow-500">02 / 制定路径</p>
            <p className="text-sm text-zinc-400 leading-relaxed">拆解关键动作：定位、内容、产品、渠道与转化，形成可执行的节奏。</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-2">
            <p className="text-sm font-medium text-yellow-500">03 / 陪跑复盘</p>
            <p className="text-sm text-zinc-400 leading-relaxed">边执行边复盘，迭代策略与素材，确保结果持续可复用、可增长。</p>
          </div>
        </div>
      </section>

      <section id="contact" className="space-y-6 pb-20 scroll-mt-24">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Mail className="w-5 h-5 text-yellow-500" />
          联系方式
        </h2>
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center space-y-4">
          <p className="text-sm text-zinc-300">扫码添加我的个人号</p>
          <div className="bg-white p-2 rounded-2xl mx-auto w-64 h-64 overflow-hidden">
            <img src="my-qrcode.jpg" alt="个人二维码" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-zinc-500">备注：合作/咨询/社群，方便我更快识别</p>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-zinc-900">
        <p className="text-xs text-zinc-600">© 2026 杨sir. 极致专注，长期复利。</p>
      </footer>

    </main>
  );
}
