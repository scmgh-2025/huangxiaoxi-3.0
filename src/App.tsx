import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Cpu, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  BrainCircuit, 
  TrendingUp, 
  QrCode, 
  ChevronRight,
  CheckCircle2,
  Users,
  Award,
  Smartphone,
  MessageSquare,
  Hotel
} from 'lucide-react';

// --- Components ---

const Modal = ({ isOpen, onClose, qrCode, phoneImages, deviceTypes, deviceLayouts, desktopOffset, title, description }: { 
  isOpen: boolean, 
  onClose: () => void,
  qrCode: string,
  phoneImages: string[],
  deviceTypes?: ('phone' | 'desktop')[],
  deviceLayouts?: ('row' | 'col')[],
  desktopOffset?: boolean,
  title?: string,
  description?: string
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[92vw] lg:max-w-[88vw] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-10 p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors shadow-sm"
            >
              <span className="sr-only">关闭</span>
              <div className="w-6 h-6 flex items-center justify-center font-bold text-2xl leading-none">×</div>
            </button>

            {/* Left Side: Phone Mockups */}
            <div className="flex-1 bg-slate-50 p-10 md:p-16 lg:p-20 flex items-center justify-center overflow-x-auto">
              <div className="flex items-center gap-8 md:gap-12">
                <div className="flex items-center gap-12 md:gap-16">
                  {phoneImages.filter((_, i) => deviceTypes?.[i] !== 'desktop').map((src, i) => (
                    <div key={`phone-${i}`} className="flex-shrink-0 w-[154px] h-[324px] md:w-[222px] md:h-[470px] bg-slate-900 rounded-[40px] border-[0.5px] border-slate-800 shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-130 hover:z-10">
                      <div className="absolute inset-0 bg-emerald-600/10 flex flex-col p-2">
                        <img src={src} alt="App Preview" className="w-full h-full object-cover rounded-[28px]" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`flex flex-col gap-8 md:gap-12 ${desktopOffset ? 'ml-16 md:ml-24' : ''}`}>
                  {phoneImages.filter((_, i) => deviceTypes?.[i] === 'desktop').map((src, i) => (
                    <div key={`desktop-${i}`} className="w-[280px] h-[158px] md:w-[384px] md:h-[216px] bg-slate-900 rounded-xl border-[0.5px] border-slate-800 shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-120 hover:z-10">
                      <div className="absolute inset-0 bg-slate-800 flex items-center justify-center p-1">
                        <img src={src} alt="Desktop Preview" className="w-full h-full object-cover rounded-md" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-t-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: QR Code */}
            <div className="w-full lg:w-[432px] p-10 md:p-16 lg:p-20 flex flex-col items-center justify-center text-center border-t lg:border-t-0 lg:border-l border-slate-100">
              <div className="mb-10 p-6 bg-white rounded-[32px] shadow-md border border-slate-100">
                <div className="w-[266px] h-[266px] md:w-[266px] md:h-[266px] bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 overflow-hidden">
                  <img src={qrCode} alt="QR Code" className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{title || '扫码立即体验'}</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                {description || (
                  <>
                    使用微信扫描上方二维码<br />
                    开启您的酒店AI数字化转型
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#">
            <img src="/PHOTO/图片1.png" alt="logo" className="w-10 h-10 rounded-lg object-cover cursor-pointer" />
          </a>
          <a href="#" className={`font-bold text-xl tracking-tight cursor-pointer ${isScrolled ? 'text-slate-900' : 'text-white'}`}>黄小西</a>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['公司介绍', 'IP介绍', '酒店智能体', '快速体验', '产品政策'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className={`transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}
            >
              {item}
            </a>
          ))}
        </div>
        <button 
          onClick={() => document.getElementById('qr-code')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20"
        >
          立即合作
        </button>
      </div>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle, light = false, id }: { title: string, subtitle?: string, light?: boolean, id?: string }) => (
  <div id={id} className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-white/70' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-emerald-500 mx-auto mt-6 rounded-full"
    />
  </div>
);

// --- Main App ---

export default function App() {
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean;
    qrCode: string;
    phoneImages: string[];
    deviceTypes?: ('phone' | 'desktop')[];
    deviceLayouts?: ('row' | 'col')[];
    desktopOffset?: boolean;
    title?: string;
    description?: string;
  } | null>(null);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      {modalContent && (
        <Modal 
          isOpen={modalContent.isOpen} 
          onClose={() => setModalContent(null)} 
          qrCode={modalContent.qrCode}
          phoneImages={modalContent.phoneImages}
          deviceTypes={modalContent.deviceTypes}
          deviceLayouts={modalContent.deviceLayouts}
          desktopOffset={modalContent.desktopOffset}
          title={modalContent.title}
          description={modalContent.description}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/PHOTO/封面.png" 
            alt="Guizhou Landscape" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm text-emerald-400 text-sm font-semibold tracking-wider uppercase"
          >
            贵旅数网 · 官方推介
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            黄小西品牌及<br />
            <span className="text-emerald-400">酒店智能体</span>推介会
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            扎根贵州本土，自带山水灵气。为每一位来黔游客打造24小时在线的专属数字分身，开启全链路智慧旅游新时代。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105"
            >
              了解更多详情
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 一、公司介绍 */}
      <section id="公司介绍" className="section-padding bg-white">
        <SectionTitle
          id="intro"
          title="强大的国资背景"
          subtitle="贵旅数网由贵旅集团、华创云信共同出资成立，深耕贵州，服务全国。"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-start"
          >
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
              <Building2 size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">贵旅集团</h3>
            <p className="text-slate-600 leading-relaxed">
              贵州省旅游龙头企业，国资委旗下核心国有企业。作为贵州文旅产业的领军者，拥有丰富的景区资源与深厚的行业积淀。
            </p>
            <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold">
              <CheckCircle2 size={18} />
              <span>省级旅游龙头</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-start"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">华创云信</h3>
            <p className="text-slate-600 leading-relaxed">
              贵州本土上交所上市公司，具备深厚国资背景。股东包括贵州茅台、贵州燃气集团等。旗下拥有华创证券、贵州白酒交易所等金融与交易平台。
            </p>
            <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
              <CheckCircle2 size={18} />
              <span>上交所上市公司</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 二、黄小西IP介绍 */}
      <section id="IP介绍" className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-[120px] -z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-8 leading-tight">
                  源自山水，智领未来<br />
                  <span className="text-emerald-400">“黄小西”文旅数字IP</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">名字由来</h4>
                      <p className="text-white/60 leading-relaxed">
                        取自贵州三大核心地标：<span className="text-white font-medium">黄</span>果树、<span className="text-white font-medium">小</span>七孔、<span className="text-white font-medium">西</span>江苗寨。扎根贵州本土，自带山水灵气。
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">重点项目</h4>
                      <p className="text-white/60 leading-relaxed">
                        贵州文旅数字化标杆，连续两年写入政府工作报告。“黄小西吃晚饭”系列标语曾获总书记关心，成为贵州对外展示的亮眼名片。
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                      <BrainCircuit size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">IP定位</h4>
                      <p className="text-white/60 leading-relaxed">
                        不同于传统平台，我们为游客打造24小时在线的<span className="text-white font-medium">专属数字分身</span>，实现“游前规划、游中服务、游后回味”的全链路智慧体验。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  name: '多彩黄小西', 
                  icon: <Smartphone />
                },
                { 
                  name: '酒店智能体', 
                  icon: <Hotel />
                },
                { 
                  name: '景区智能体', 
                  icon: <MapPin />
                },
                { 
                  name: '餐饮智能体', 
                  icon: <Users />
                },
                { 
                  name: '个人智能体', 
                  icon: <MessageSquare />
                },
                { 
                  name: '全域智慧游', 
                  icon: <Zap />
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setModalContent({
                    isOpen: true,
                    qrCode: '',
                    phoneImages: [],
                    title: item.name,
                    description: <>即将上线，敬请期待</>
                  })}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="mb-4 text-emerald-400">{item.icon}</div>
                  <span className="font-semibold">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 三、“黄小西”酒店智能体介绍 */}
      <section id="酒店智能体" className="section-padding bg-slate-50">
        <SectionTitle 
          title="“黄小西”酒店智能体" 
          subtitle="专为贵州酒店打造的AI数字管家，让中小酒店、民宿也能拥有大型连锁酒店级别的AI服务能力。"
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 更省心 */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-200 h-full flex flex-col">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">更省心：解放人力</h3>
              <ul className="space-y-4 text-slate-600 flex-grow">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>旺季高频咨询秒级响应，自动分流前台压力</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>送物、报修对话即可下单，系统自动派单</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>流程透明、响应更快，让员工专注个性化服务</span>
                </li>
              </ul>
              <button 
                onClick={() => setModalContent({
                  isOpen: true,
                  qrCode: '/PHOTO/房间二维码.png',
                  phoneImages: ['/PHOTO/黄小西首页.jpg', '/PHOTO/0daa516532ae70afbaca39e60ba7b0e1.jpg', '/PHOTO/微信图片_20260320170335_628_298.jpg'],
                  title: '扫码体验酒店智能体',
                  description: <>使用微信扫描上方二维码<br />开启您的酒店AI数字化转型</>
                })}
                className="mt-8 w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                了解详情 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 更聪明 */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 h-full flex flex-col">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">更聪明：体验升级</h3>
              <ul className="space-y-4 text-white/80 flex-grow">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-300 flex-shrink-0" size={20} />
                  <span>精准行程规划：结合偏好科学定制路线</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-300 flex-shrink-0" size={20} />
                  <span>本地智能推荐：美食景点一键推送</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-300 flex-shrink-0" size={20} />
                  <span>暖心陪伴：助眠、讲故事，让服务有温度</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-300 flex-shrink-0" size={20} />
                  <span>老板端：洞悉客户喜好，优化服务质量</span>
                </li>
              </ul>
              <button 
                onClick={() => setModalContent({
                  isOpen: true,
                  qrCode: '/PHOTO/酒店码.png',
                  phoneImages: ['/PHOTO/7.jpg', '/PHOTO/8.jpg', '/PHOTO/9.jpg'],
                  title: '扫码体验酒店智能体',
                  description: <>使用微信扫描上方二维码<br />开启您的酒店AI数字化转型</>
                })}
                className="mt-8 w-full py-3 bg-white/20 text-white font-bold rounded-xl hover:bg-white hover:text-emerald-700 transition-all flex items-center justify-center gap-2 group"
              >
                了解详情 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 更赚钱 */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-200 h-full flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6">更赚钱：多元增收</h3>
              <ul className="space-y-4 text-slate-600 flex-grow">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>接入全域旅游供应链，热门门票精品线路</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>升级为“旅游服务综合运营商”，一键上架</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>支持自有商品，实现“住+游+购”一体增收</span>
                </li>
              </ul>
              <button 
                onClick={() => setModalContent({
                  isOpen: true,
                  qrCode: '/PHOTO/酒店码.png',
                  phoneImages: ['/PHOTO/黄小西首页.jpg', '/PHOTO/11(1).png', '/PHOTO/12(1).png'],
                  deviceTypes: ['phone', 'desktop', 'desktop'],
                  desktopOffset: true,
                  title: '扫码体验酒店智能体',
                  description: <>使用微信扫描上方二维码<br />开启您的酒店AI数字化转型</>
                })}
                className="mt-8 w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                了解详情 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 四、快速体验及试用 */}
      <section id="快速体验" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">快速体验及试用</h2>
              <p className="text-lg text-slate-500 mb-10">
                国企背景、官方品牌，在数据安全、隐私保护方面无须担心。仅需4步，即可拥有专属智能管家。
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', text: '扫描二维码，注册账号' },
                  { step: '02', text: '上传营业执照，输入酒店名称，确认选取酒店' },
                  { step: '03', text: '对话输入几个简单问题的答案' },
                  { step: '04', text: '等待1分钟生成酒店专属二维码即可开始体验' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="text-3xl font-black text-emerald-100">{item.step}</div>
                    <div className="text-lg font-medium text-slate-700">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full" />
                <div id="qr-code" className="relative glass-card p-10 rounded-[40px] flex flex-col items-center">
                  <div className="w-64 h-64 bg-slate-100 rounded-3xl flex items-center justify-center mb-6 border-2 border-dashed border-slate-300 overflow-hidden">
                    <img src="/PHOTO/QTYEWM.png" alt="QR Code" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-slate-500 font-medium mb-2">扫描上方二维码</p>
                  <p className="text-emerald-600 font-bold text-xl">快速入驻黄小西酒店智能体</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 五、产品政策 */}
      <section id="产品政策" className="section-padding bg-slate-900 text-white">
        <SectionTitle 
          title="合作政策" 
          subtitle="超低门槛，官方扶持。前六个月试用期全免费，随时无责终止合作。"
          light
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 模式一 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10 flex flex-col"
          >
            <div className="mb-8">
              <span className="px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">模式一</span>
              <h3 className="text-3xl font-bold mt-4">尾房置换模式</h3>
            </div>
            <div className="space-y-6 flex-grow">
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                <span className="text-white/60">50间房以下</span>
                <span className="font-bold text-emerald-400">每月 1 间尾房</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                <span className="text-white/60">50-200间房</span>
                <span className="font-bold text-emerald-400">每月 2 间尾房</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                <span className="text-white/60">200间房以上</span>
                <span className="font-bold text-emerald-400">每月 3 间尾房</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-white/40 italic">* 尾房置换，无现金压力，轻松升级AI服务</p>
          </motion.div>

          {/* 模式二 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[32px] bg-emerald-600 flex flex-col"
          >
            <div className="mb-8">
              <span className="px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">模式二</span>
              <h3 className="text-3xl font-bold mt-4">年费订阅模式</h3>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center py-10">
              <div className="text-6xl font-black mb-2">¥1980</div>
              <div className="text-xl text-white/80">/ 年</div>
            </div>
            <button
              onClick={() => document.getElementById('qr-code')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-slate-100 transition-colors"
            >
              立即合作
            </button>
            <p className="mt-8 text-sm text-white/70 text-center">每天仅需约 5.4 元，全面赋能酒店</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center font-bold">黄</div>
            <span className="font-bold text-lg">黄小西 · 贵旅数网</span>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 贵旅数网 (贵州) 科技有限公司. All rights reserved.
          </div>
          <div className="flex gap-6">
            <ShieldCheck className="text-emerald-500/50" size={20} />
            <span className="text-white/40 text-sm">数据安全与隐私保护认证</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
