/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Sun, 
  Trees, 
  ArrowRight, 
  Ruler, 
  PenTool, 
  Hammer, 
  CheckCircle, 
  Star, 
  X,
  Mail,
  Phone,
  MapPin,
  ChevronDown
} from 'lucide-react';

const FORMSUBMIT_EMAIL = 'ecobalancecity@gmail.com';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setFormStatus('submitting');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1e1e14]/68 z-10" />
          <img 
            alt="Premium Green Wall" 
            className="w-full h-full object-cover" 
            src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/Gemini_Generated_Image_jqvr88jqvr88jqvr-scaled.png" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              alt="EcoBalance Logo" 
              className="h-[72px] w-auto object-contain" 
              src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/pomelli_bdna_image_0414.png" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-[#46D4FE] font-headline font-black tracking-[0.2em] text-sm uppercase">
              Malaysia's Leading Green Wall Specialists
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-headline font-black text-5xl md:text-8xl text-white mb-6 leading-[1.1] tracking-tight text-shadow-sm"
          >
            Premium Artificial Greenery. <span className="text-[#67FF04]">Zero Upkeep.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Transforming Malaysian corporate spaces with architectural-grade vertical gardens that maintain their lush, organic vibrancy forever—without a single drop of water.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#67FF04] hover:bg-[#67FF04]/90 text-[#313131] font-black text-lg px-10 py-5 rounded-full transition-all scale-100 hover:scale-105 active:scale-95 shadow-xl"
            >
              REQUEST A FREE CONSULTATION
            </button>
            <p className="text-white/35 text-[0.78rem] tracking-wide font-medium">
              * Free consultation subject to project qualification. Terms & Conditions apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE ECOBALANCE ADVANTAGE */}
      <section className="py-24 bg-surface-container-low" id="advantage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col mb-16 relative">
            <div className="bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase tracking-widest">
              WHY ECOBALANCE
            </div>
            <div className="flex items-start md:items-center gap-6">
              <div className="h-12 w-1.5 bg-secondary-container rounded-full shrink-0" />
              <div>
                <h2 className="text-4xl font-headline font-black text-on-surface">Creative Precision. Practical Excellence. Engineered Botanicals</h2>
                <p className="text-secondary font-medium mt-2">We collaborate closely with clients to deliver high-quality, design-driven green spaces that are budget-conscious, efficiently executed, and completed on time—even within tight project timelines.</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-surface-container-lowest p-10 rounded-lg shadow-sm border-t-4 border-primary-container group transition-all hover:-translate-y-2">
              <Leaf className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-headline font-extrabold mb-4">Zero Maintenance</h3>
              <p className="text-tertiary leading-relaxed">Eliminate irrigation costs, specialized pruning, and pest control. Our walls remain perfect year-round with zero manual effort.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-lg shadow-sm border-t-4 border-primary-container group transition-all hover:-translate-y-2">
              <Sun className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-headline font-extrabold mb-4">UV Protection</h3>
              <p className="text-tertiary leading-relaxed">Integrated UV-resistant polymers ensure your greenery stays vibrant green even in direct Malaysian sunlight.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-lg shadow-sm border-t-4 border-primary-container group transition-all hover:-translate-y-2">
              <Trees className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-headline font-extrabold mb-4">Hyper-Realistic</h3>
              <p className="text-tertiary leading-relaxed">Hand-assembled with over 30 botanical varieties. The texture and color gradients are indistinguishable from living plants.</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-primary font-black flex items-center gap-2 group transition-all hover:gap-4 border-b-2 border-secondary-container pb-1"
            >
              DISCUSS YOUR SPACE WITH AN EXPERT
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-surface-container-high text-tertiary px-4 py-1 rounded-full text-xs font-bold w-fit mx-auto mb-6 uppercase tracking-widest">
            OUR CLIENTS
          </div>
          <h2 className="text-3xl font-headline font-black mb-12">Trusted by Malaysia's Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {[
              { name: "Shopee", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/Shopee-Logo-2015-768x502-1.png", h: 10 },
              { name: "FINAS", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/FINAS_Malaysia.jpeg", h: 16 },
              { name: "WORQ", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/Screenshot-2026-04-14-233509.png", h: 8 },
              { name: "Velesto", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/velesto_energy_berhad_logo.jpg", h: 12 },
              { name: "Allianz", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/ALLIANZ.webp", h: 10 },
              { name: "Pharmaserv", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/PHARMASERV.webp", h: 10 },
              { name: "Toyota", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/PCM_TOYOTA.webp", h: 10 },
              { name: "Amway", url: "https://borneohalfmarathon.com/wp-content/uploads/2026/04/AMWAY.webp", h: 10 },
            ].map((client) => (
              <div key={client.name} className="bg-white/50 p-8 rounded-lg grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 border border-transparent hover:border-outline-variant/20 flex items-center justify-center min-h-[120px]">
                <img src={client.url} alt={`${client.name} Logo`} className={`h-${client.h} w-auto mx-auto object-contain`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: USE CASES */}
      <section>
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="md:w-1/2 relative overflow-hidden group">
            <img 
              alt="Office Green Wall" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/THE-EXCHANGE-TRX.jpg" 
            />
          </div>
          <div className="md:w-1/2 bg-[#f7f7f7] flex flex-col justify-center p-12 md:p-24">
            <span className="bg-[#474747] text-white px-3 py-1 rounded-full w-fit font-headline font-black text-xs tracking-widest mb-6 uppercase">
              CORPORATE OFFICES & WORKSPACES
            </span>
            <h3 className="text-4xl font-headline font-black mb-6 leading-tight">Make Your Brand Impossible to Ignore</h3>
            <p className="text-tertiary text-lg mb-8 leading-relaxed">
              Elevate your brand identity and welcome clients with a striking, maintenance-free reception backdrop. Our corporate installations are professionally fitted, always on-brand, and completely hassle-free.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#67FF04] text-[#313131] w-fit px-10 py-5 rounded-full font-black text-sm tracking-wider shadow-lg hover:shadow-xl transition-all uppercase"
            >
              REQUEST A FREE CONSULTATION
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse min-h-[600px]">
          <div className="md:w-1/2 relative overflow-hidden group">
            <img 
              alt="Outdoor Cafe Green Wall" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/AMWAY.jpg.jpeg" 
            />
          </div>
          <div className="md:w-1/2 bg-surface flex flex-col justify-center p-12 md:p-24">
            <span className="bg-[#474747] text-white px-3 py-1 rounded-full w-fit font-headline font-black text-xs tracking-widest mb-6 uppercase">
              RETAIL & HOSPITALITY
            </span>
            <h3 className="text-4xl font-headline font-black mb-6 leading-tight">Create an Unforgettable First Impression</h3>
            <p className="text-tertiary text-lg mb-8 leading-relaxed">
              Create an Instagram-worthy aesthetic for your café, showroom, or boutique without worrying about plant upkeep. A bespoke artificial wall is one of the highest-ROI interior investments for retail and F&B spaces.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#67FF04] text-[#313131] w-fit px-10 py-5 rounded-full font-black text-sm tracking-wider shadow-lg hover:shadow-xl transition-all uppercase"
            >
              REQUEST A FREE CONSULTATION
            </button>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-inverse-surface py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <h4 className="text-white text-2xl font-headline font-bold">Ready to redefine your environment?</h4>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary-container text-on-primary-fixed px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform"
          >
            UPGRADE YOUR SPACE TODAY
          </button>
        </div>
      </section>

      {/* SECTION 5: PROJECT GALLERY */}
      <section className="py-24 bg-surface-container-low" id="gallery">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-secondary-container mx-auto mb-10 opacity-60" />
            <h2 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-6 tracking-tight">
              Flawless Execution, <span className="text-[#67FF04]">Zero Upkeep</span>
            </h2>
            <p className="text-tertiary text-lg md:text-xl font-medium max-w-2xl mx-auto">
              A selection of completed artificial green wall installations across Malaysia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            <div className="md:row-span-2 relative group overflow-hidden rounded-lg">
              <img src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/soho-suites01.jpg" alt="Gallery 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold text-xl">The Exchange TRX - Sky Lobby</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/moss-wallart-showroom-kv.jpg" alt="Gallery 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold">Botanical Detail</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/privateresidence-kl01-1.jpg" alt="Gallery 3" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold">Pavilion Boutique</p>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg">
              <img src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/klia-gate4.jpg" alt="Gallery 4" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold text-xl">Mont Kiara Residential Terrace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="py-24 bg-[#313131]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="bg-white/15 text-white px-6 py-2 rounded-[20px] text-xs font-bold uppercase tracking-[0.18em] w-fit mb-4">
              OUR PROCESS
            </div>
            <div className="w-[48px] h-[3px] bg-[#46D4FE] mb-6" />
            <h2 className="text-5xl font-roboto font-black mb-6">
              <span className="text-white">How It</span> <span className="text-[#67FF04]">Works</span>
            </h2>
            <p className="text-white/55 text-lg font-opensans max-w-2xl">
              From enquiry to a finished wall you'll be proud of — a clear, transparent four-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 relative">
            <div className="px-8 pb-12 md:pb-0 border-white/10 md:border-r">
              <div className="relative mb-6">
                <span className="text-[4rem] font-roboto font-black text-white/5 absolute -top-12 left-0 select-none">01</span>
                <div className="bg-[#67FF04] h-14 w-14 rounded-full flex items-center justify-center relative z-10">
                  <Ruler className="text-[#313131] w-6 h-6" />
                </div>
              </div>
              <h3 className="text-white font-roboto font-bold text-xl mb-4">Site Assessment</h3>
              <p className="text-white/60 font-opensans leading-relaxed text-sm">We evaluate your space, dimensions, and aesthetic goals.</p>
            </div>
            <div className="px-8 pb-12 md:pb-0 border-white/10 md:border-r">
              <div className="relative mb-6">
                <span className="text-[4rem] font-roboto font-black text-white/5 absolute -top-12 left-0 select-none">02</span>
                <div className="bg-[#67FF04] h-14 w-14 rounded-full flex items-center justify-center relative z-10">
                  <PenTool className="text-[#313131] w-6 h-6" />
                </div>
              </div>
              <h3 className="text-white font-roboto font-bold text-xl mb-4">Design Proposal</h3>
              <p className="text-white/60 font-opensans leading-relaxed text-sm">Our experts craft a bespoke arrangement tailored to your branding.</p>
            </div>
            <div className="px-8 pb-12 md:pb-0 border-white/10 md:border-r">
              <div className="relative mb-6">
                <span className="text-[4rem] font-roboto font-black text-white/5 absolute -top-12 left-0 select-none">03</span>
                <div className="bg-[#67FF04] h-14 w-14 rounded-full flex items-center justify-center relative z-10">
                  <Hammer className="text-[#313131] w-6 h-6" />
                </div>
              </div>
              <h3 className="text-white font-roboto font-bold text-xl mb-4">Installation</h3>
              <p className="text-white/60 font-opensans leading-relaxed text-sm">Quick, clean professional setup. 1–3 working days on-site.</p>
              <p className="text-white/30 text-[0.75rem] font-opensans mt-2 leading-tight">On-site only. Workshop prep not included. Commencement upon receipt of deposit.</p>
            </div>
            <div className="px-8">
              <div className="relative mb-6">
                <span className="text-[4rem] font-roboto font-black text-white/5 absolute -top-12 left-0 select-none">04</span>
                <div className="bg-[#67FF04] h-14 w-14 rounded-full flex items-center justify-center relative z-10">
                  <CheckCircle className="text-[#313131] w-6 h-6" />
                </div>
              </div>
              <h3 className="text-white font-roboto font-bold text-xl mb-4">Maintenance</h3>
              <p className="text-white/60 font-opensans leading-relaxed text-sm">Artificial has no maintenance</p>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#67FF04] text-[#313131] px-[38px] py-[16px] rounded-[4px] font-bold uppercase text-sm tracking-widest transition-all hover:shadow-[0_0_20px_rgba(103,255,4,0.4)] hover:-translate-y-0.5"
            >
              SCHEDULE YOUR SITE ASSESSMENT
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT REVIEWS */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="bg-[#313131] text-white px-6 py-2 rounded-[20px] text-xs font-bold uppercase tracking-[0.18em] w-fit mb-4">
              CLIENT REVIEWS
            </div>
            <div className="w-[48px] h-[3px] bg-[#46D4FE] mb-6" />
            <h2 className="text-5xl font-roboto font-[900] mb-6">
              <span className="text-[#313131]">What Our</span> <span className="text-[#67FF04]">Clients Say</span>
            </h2>
            <p className="text-[#666666] text-lg font-opensans max-w-2xl">
              We take pride in our hyper-realistic botanical craftsmanship and the trust we build with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                text: "You have shown professionalism, initiative, and magic green fingers! Everyone who sees the plants feels the need to touch them to see if it's real, as they look so healthy and perfect.",
                author: "Theresa Arthur",
                role: "Group Account Director, M&C Saatchi KL"
              },
              {
                text: "The installation was seamless and the team was incredibly professional throughout. Our clients comment on the wall every single time they visit our office.",
                author: "Corporate Client",
                role: "Klang Valley, Malaysia"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[8px] border border-[#e8e8e8] border-l-[4px] border-l-[#67FF04] shadow-sm relative transition-all hover:shadow-md">
                <div className="flex text-[#67FF04] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[#313131] text-lg leading-relaxed mb-8 font-opensans italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-[#67FF04] text-lg">{review.author}</p>
                  <p className="text-[#666666] text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#67FF04] text-[#313131] px-10 py-5 rounded-full font-bold text-sm tracking-wider shadow-lg hover:shadow-xl transition-all uppercase"
            >
              REQUEST A FREE CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER FORM */}
      <footer className="bg-[#313131] border-t-2 border-[#67FF04] pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="bg-white/15 text-white px-6 py-2 rounded-[20px] text-xs font-bold uppercase tracking-[0.18em] w-fit mb-4">
              GET IN TOUCH
            </div>
            <div className="w-[48px] h-[3px] bg-[#46D4FE] mb-6" />
            <h2 className="text-4xl md:text-5xl font-roboto font-[900] text-white mb-6">Request Your Custom Quotation & Consultation</h2>
            <p className="text-white/60 font-opensans max-w-3xl text-lg">
              For commercial and institutional spaces · Projects from RM20,000 · Receive your tailored proposal via email within 24 hours.
            </p>
          </div>
          
          <div className="max-w-[760px] mx-auto bg-white/5 border border-white/15 rounded-[12px] p-8 md:p-12 mb-20">
            <form
              action={`https://formsubmit.co/${FORMSUBMIT_EMAIL}`}
              method="POST"
              onSubmit={handleFormSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input type="hidden" name="_subject" value="New Quote Request — EcoBalance Artificial" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">FULL NAME *</label>
                <input name="name" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all placeholder:text-white/25" placeholder="Enter your full name" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">EMAIL ADDRESS *</label>
                <input name="email" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all placeholder:text-white/25" placeholder="email@example.com" required type="email" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">PHONE NUMBER *</label>
                <input name="phone" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all placeholder:text-white/25" placeholder="+60 12-345 6789" required type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">PROJECT LOCATION / AREA <span className="text-[0.65rem] lowercase opacity-60 font-normal">(Optional)</span></label>
                <input name="location" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all placeholder:text-white/25" placeholder="e.g. Bangsar, KL" type="text" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">PROJECT TYPE <span className="text-[0.65rem] lowercase opacity-60 font-normal">(Optional)</span></label>
                <select name="project_type" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all appearance-none">
                  {["Corporate Office", "Retail Commercial", "Healthcare", "Hospitality", "Residential", "Government", "Other"].map(type => (
                    <option key={type} className="bg-[#313131] text-white">{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">APPROXIMATE WALL SIZE <span className="text-[0.65rem] lowercase opacity-60 font-normal">(Optional)</span></label>
                <input name="wall_size_sqm" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all placeholder:text-white/25" placeholder="Approx. sqm" type="number" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">BUDGET RANGE <span className="text-[0.65rem] lowercase opacity-60 font-normal">(Optional)</span></label>
                <select name="budget" defaultValue="" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all appearance-none">
                  <option className="bg-[#313131] text-white" disabled value="">Select Budget Range</option>
                  {["RM 5,000 - RM 20,000", "RM 20,000 - RM 50,000", "RM 50,000 - RM 70,000", "RM 70,000 - RM 100,000"].map(range => (
                    <option key={range} className="bg-[#313131] text-white">{range}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-white/70 text-[0.72rem] font-semibold font-opensans uppercase tracking-[0.08em]">ADDITIONAL NOTES *</label>
                <textarea name="notes" className="w-full bg-white/[0.08] border-white/20 text-white rounded-lg p-4 focus:border-[#67FF04] focus:ring-1 focus:ring-[#67FF04] outline-none transition-all placeholder:text-white/25 h-32" placeholder="Tell us about your space and requirements..." required />
              </div>
              <div className="md:col-span-2 pt-4">
                <div className="w-full h-px bg-white/10 mb-8" />
                {formStatus === 'success' ? (
                  <div className="bg-[#67FF04]/10 border border-[#67FF04]/40 text-[#67FF04] text-center py-6 px-4 rounded-[4px] font-opensans">
                    Thank you — your request has been sent. We'll reply within 24 hours.
                  </div>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-[#67FF04] text-[#313131] py-4 rounded-[4px] font-roboto font-[900] uppercase tracking-wider text-base transition-all hover:shadow-[0_0_20px_rgba(103,255,4,0.4)] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-lg"
                    >
                      {formStatus === 'submitting' ? 'SENDING…' : 'REQUEST QUOTE VIA EMAIL'}
                    </button>
                    {formStatus === 'error' && (
                      <p className="mt-3 text-center text-red-400 text-sm font-opensans">
                        Something went wrong. Please try again, or email us directly at {FORMSUBMIT_EMAIL}.
                      </p>
                    )}
                  </>
                )}
                <p className="mt-4 text-center text-white/35 text-[0.78rem] font-opensans">
                  Operating Hours: Mon–Fri, 9am–6pm · Includes free site assessment for qualified projects*
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* FOOTER T&C SECTION */}
        <div className="bg-[#1a1a1a] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="mb-8 opacity-20 hover:opacity-40 transition-opacity">
              <img 
                alt="BioWall Luxe Logo" 
                className="h-[72px] w-auto object-contain brightness-0 invert" 
                src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/pomelli_bdna_image_0414.png" 
              />
            </div>
            <div className="max-w-[780px] text-center mb-8">
              <p className="text-white/25 text-[0.75rem] font-opensans font-[400] leading-[1.7]">
                <span className="font-bold text-white/35">Terms & Conditions Apply:</span> Free consultation and site assessment are subject to project qualification. Eligibility will be determined based on project scope, size, location, and readiness to proceed. In some cases, EcoBalance may require preliminary information, including measurements, photos, or project details, before arranging a consultation, quotation, or site visit. Site visits are not guaranteed for all enquiries. 1–3 day installation refers to on-site installation at site only. Not including prep work at workshop. Job commencement upon receipt of deposit.
              </p>
            </div>
            <p className="text-white/15 text-[0.72rem] font-opensans mt-[20px] text-center">
              © 2025 EcoBalance Cityscapes Sdn Bhd · B1-12, Tower B, Zenith Corporate Park, Jalan SS7/26, Kelana Jaya, 47301 Petaling Jaya
            </p>
            <div className="mt-2 text-center">
              <a className="text-[#67FF04] text-[0.78rem] font-opensans" href="mailto:ecobalancecity@gmail.com">ecobalancecity@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-inverse-surface max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                  Consultation Form
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-headline font-black text-white mb-8">Let's Green Your Space</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-xs font-semibold uppercase">Full Name</label>
                    <input className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg p-4 focus:border-[#67FF04] outline-none" placeholder="Full Name" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-xs font-semibold uppercase">Email Address</label>
                    <input className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg p-4 focus:border-[#67FF04] outline-none" placeholder="Email Address" type="email" />
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-primary-container text-on-primary-fixed py-4 rounded-lg font-black text-lg hover:shadow-[0_0_20px_rgba(103,255,4,0.4)] transition-all"
                  >
                    PROCEED TO QUOTE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
