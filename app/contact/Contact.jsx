"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Contact = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    scrapType: 'Iron',
    quantity: '',
    contactMethod: 'Email'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your inquiry has been sent.');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div id="smooth-wrapper" ref={mainRef}>
      <div id="smooth-content">
        <div className="relative overflow-hidden bg-background py-16 px-6 md:px-12 lg:px-24 mt-8">
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-5">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto">

            {/* 1) Contact Intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16 space-y-4"
            >
              <motion.div variants={fadeInUp} className="inline-block rounded-full bg-primary/10 px-4 py-2 text-lg font-bold uppercase tracking-widest text-primary mt-4">
                Get In Touch
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                Trusted Metals – <span className="text-primary">Steel, Iron & Copper</span> Supplier across India              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                <strong className="text-foreground uppercase">MySteel</strong>,offers trusted scrap trading for Iron, Copper, Aluminium, and Plastic — built on long-term relationships and reliability.
              </motion.p>
            </motion.div>

            {/* 2) Contact Details + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

              {/* Left Side: Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-4 border-primary/10 transition-all group-hover:scale-105"></div>

                <div className="bg-card p-8 rounded-2xl shadow-xl border border-border h-full">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Details</h2>

                  <div className="space-y-6 text-muted-foreground">
                    {[
                      {
                        label: "Address",
                        val: "Suite No: 326, 2nd Floor, KC Arcade, Near TV Centre, CSEZ P.O, Kakkanad, Ernakulam, Kerala - 682037",
                      },
                      {
                        label: "Phone",
                        val: "+91 9895122441",
                        color: "text-primary font-bold",
                      },
                      { label: "Email", val: "info@mysteelindia.in" },
                      { label: "Working Hours", val: "Monday – Saturday, 8:00 AM to 6:00 PM" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <div>
                          <h3 className="font-bold text-foreground uppercase text-xs tracking-wider">{item.label}</h3>
                          <p className={`text-sm leading-snug ${item.color || ''}`}>{item.val}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 p-5 bg-primary/5 rounded-xl border-l-4 border-primary"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-primary font-bold uppercase">Note:</strong> For urgent enquiries, please call us directly.
                      For general requests or bulk orders, submit the enquiry form and our
                      team will respond within 24 hours.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side: Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-2xl border border-border h-full"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        onChange={handleChange}
                        className="w-full bg-background border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary p-3 border outline-none transition-all text-foreground placeholder:text-xs"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Eg. MySteel pvt ltd"
                        onChange={handleChange}
                        className="w-full bg-background border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary p-3 border outline-none transition-all text-foreground placeholder:text-xs"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@example.com"
                        required
                        onChange={handleChange}
                        className="w-full bg-background border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary p-3 border outline-none transition-all text-foreground placeholder:text-xs"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 0000 000000"
                        required
                        onChange={handleChange}
                        className="w-full bg-background border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary p-3 border outline-none transition-all text-foreground placeholder:text-xs"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">Scrap Type</label>
                    <select
                      name="scrapType"
                      value={formData.scrapType}
                      onChange={handleChange}
                      className="w-full bg-background border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary p-3 border outline-none text-foreground cursor-pointer"
                    >
                      <option value="Iron">Iron</option>
                      <option value="Copper">Copper</option>
                      <option value="Aluminium">Aluminium</option>
                      <option value="Plastic">Plastic</option>
                      <option value="Mixed">Mixed</option>
                    </select>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">Quantity / Details</label>
                    <textarea
                      name="quantity"
                      rows="3"
                      required
                      onChange={handleChange}
                      placeholder="Specify quantity (e.g. 500kg, 10 tons) and any other details..."
                      className="w-full bg-background border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary p-3 border outline-none transition-all text-foreground placeholder:text-xs"
                    ></textarea>
                  </motion.div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Preferred Contact Method</label>
                    <div className="flex gap-6">
                      {['Email', 'Phone', 'WhatsApp'].map((method) => (
                        <motion.label key={method} whileTap={{ scale: 0.95 }} className="flex items-center cursor-pointer group">
                          <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleChange} className="w-4 h-4 text-primary focus:ring-primary border-border bg-background" />
                          <span className="ml-2 text-sm font-medium text-muted-foreground group-hover:text-primary">{method}</span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#991b1b" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl bg-primary py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-sm"
                  >
                    Submit Inquiry
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;