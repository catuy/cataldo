---
layout: onepager
title: Diego Cataldo - Full-Stack Designer
permalink: /
---

<!-- Main Container -->
<main class="max-w-[1040px] mx-auto px-6 md:px-12 pb-32">

    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center">
        <div>
            <!-- Headline -->
            <div class="mb-8">
                <!-- Hi, I'm Diego + Photo -->
                <div class="flex items-center gap-4 mb-4">
                    <h1 class="text-[64px] md:text-[72px] font-medium leading-none">
                        Hi, I'm Diego Cataldo
                    </h1>
                    <img src="/assets/blogimages/me.jpeg" alt="Diego Cataldo" class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-border-light">
                </div>

                <!-- Code Icon + Full-Stack Designer -->
                <div class="flex items-center gap-2">
                    <h1 id="rotating-title" class="text-[64px] md:text-[72px] font-medium leading-none text-text-secondary">
                        Full-Stack Designer
                    </h1>
                </div>
            </div>

            <!-- Description -->
            <p class="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed">
                A hybrid of creator, strategist, and builder. I craft user-centered digital experiences where great design lives at the intersection of logic and feeling.
            </p>

            <!-- Availability Badge -->
            <div class="flex items-center gap-2">
                <div class="relative">
                    <div class="w-2.5 h-2.5 rounded-full bg-green-dot green-dot-shadow"></div>
                </div>
                <p class="text-base text-text-secondary">Based in Montevideo, Uruguay</p>
            </div>
        </div>
    </section>
    
    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 my-12"></div>

    {% include about-section.html %}

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    {% include experience-section.html %}

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    <!-- Projects Section -->
    <section id="projects" class="mb-16">
        <h2 class="text-sm text-text-secondary mb-6">Selected projects</h2>

        <div class="grid md:grid-cols-2 gap-6">
            <!-- Project Card -->
            <div class="bg-white rounded-2xl overflow-hidden border border-border-light hover:shadow-xl transition-shadow group">
                <div class="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <svg class="w-16 h-16 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Education</span>
                    </div>
                    <h3 class="text-xl font-medium mb-2">Universidad Católica del Uruguay</h3>
                    <p class="text-black/70 text-sm mb-4">
                        Optimized the enrollment systems for Uruguay's Catholic University. Designed interfaces aligned with their new visual identity for improved user experience.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">UI Design</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">System Design</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Higher Education</span>
                    </div>
                </div>
            </div>

            <!-- Project Card -->
            <div class="bg-white rounded-2xl overflow-hidden border border-border-light hover:shadow-xl transition-shadow group">
                <div class="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                    <svg class="w-16 h-16 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Policy</span>
                    </div>
                    <h3 class="text-xl font-medium mb-2">Monitor Cannabis</h3>
                    <p class="text-black/70 text-sm mb-4">
                        Supporting a regional knowledge platform for cannabis policy. Designed identity, brand system, and digital communication strategy for policy makers.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Branding</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Identity</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Strategy</span>
                    </div>
                </div>
            </div>

            <!-- Project Card -->
            <div class="bg-white rounded-2xl overflow-hidden border border-border-light hover:shadow-xl transition-shadow group">
                <div class="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                    <svg class="w-16 h-16 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Film</span>
                    </div>
                    <h3 class="text-xl font-medium mb-2">Criolla Films</h3>
                    <p class="text-black/70 text-sm mb-4">
                        Building a bold visual identity and strategic web presence for a new film production company in Uruguay. Complete branding and digital strategy.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Visual Identity</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Web Design</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Branding</span>
                    </div>
                </div>
            </div>

            <!-- Project Card -->
            <div class="bg-white rounded-2xl overflow-hidden border border-border-light hover:shadow-xl transition-shadow group">
                <div class="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <svg class="w-16 h-16 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Media</span>
                    </div>
                    <h3 class="text-xl font-medium mb-2">Búsqueda & Brecha</h3>
                    <p class="text-black/70 text-sm mb-4">
                        Guiding legacy media outlets into the digital era. Led digital transformation embracing mobile-first experiences for Uruguay's leading newspapers.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Digital Transformation</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Mobile-First</span>
                        <span class="px-2 py-1 bg-black/5 text-xs rounded-full">Consulting</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    <!-- Services Section -->
    <section id="services" class="mb-16">
        <h2 class="text-sm text-text-secondary mb-6">Services</h2>

        <div class="grid md:grid-cols-3 gap-6">
            <!-- Service Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#3b82f6">
                        <path d="M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">Web Development</h3>
                <p class="text-black/70 text-sm">
                    Building fast, responsive, and scalable web applications using modern frameworks and best practices.
                </p>
            </div>

            <!-- Service Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#a855f7">
                        <path d="M216,28H40A20,20,0,0,0,20,48V208a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V48A20,20,0,0,0,216,28Zm-4,176H44V52H212ZM164,76a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,76Zm0,52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,128Zm0,52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,180Z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">UI/UX Design</h3>
                <p class="text-black/70 text-sm">
                    Creating beautiful and intuitive user interfaces with focus on user experience and accessibility.
                </p>
            </div>

            <!-- Service Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#22c55e">
                        <path d="M228.88,73.37,131.12,6a12,12,0,0,0-11.94,0l-96,55.38A12,12,0,0,0,18,72.62V183.38a12,12,0,0,0,5.18,9.86l92.36,64.14,3.76,2.59a12,12,0,0,0,13.46,0L232.94,192a12,12,0,0,0,5.06-9.86V72.62A12,12,0,0,0,228.88,73.37ZM128,32.39l72.21,41.74-27.71,16-72.27-41.77ZM126,120.39,53.79,78.65l30.18-17.44L156.24,103Zm-80,18.44,70,40.44v70.24L46,209.44Zm94,110.68V148.27l70-40.44V209.48Z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">Performance Optimization</h3>
                <p class="text-black/70 text-sm">
                    Optimizing web applications for speed, SEO, and core web vitals to ensure the best user experience.
                </p>
            </div>

            <!-- Service Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#f97316">
                        <path d="M232,80H182.62L166.81,44.4A20,20,0,0,0,148.24,32H107.76A20,20,0,0,0,89.19,44.4L73.38,80H24A12,12,0,0,0,12,92V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V92A12,12,0,0,0,232,80ZM111.07,56h33.86l7.2,24h-48.26ZM220,188H36V104H220ZM128,116a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,128,164Z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">Code Review</h3>
                <p class="text-black/70 text-sm">
                    Providing thorough code reviews to ensure quality, maintainability, and adherence to best practices.
                </p>
            </div>

            <!-- Service Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#ef4444">
                        <path d="M136,108a16,16,0,1,1,16,16A16,16,0,0,1,136,108ZM88,92a16,16,0,1,0,16,16A16,16,0,0,0,88,92Zm128,20v48a36,36,0,0,1-36,36H146.94A44,44,0,0,1,56,176v-8a20,20,0,0,1,20-20h4a20,20,0,0,1,20,20v8a20,20,0,0,0,20,20h60a12,12,0,0,0,12-12V112a84,84,0,0,0-168,0v16a12,12,0,0,1-24,0V112a108,108,0,0,1,216,0ZM96,176v-8h-4v8a12,12,0,0,0,4,0Z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">Consulting</h3>
                <p class="text-black/70 text-sm">
                    Offering technical consulting and strategic guidance for your web development projects.
                </p>
            </div>

            <!-- Service Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#14b8a6">
                        <path d="M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-76,64a12,12,0,0,0-12,12v36a12,12,0,0,0,24,0V132A12,12,0,0,0,156,120ZM100,88a12,12,0,0,0-12,12v68a12,12,0,0,0,24,0V100A12,12,0,0,0,100,88Z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">Mentoring</h3>
                <p class="text-black/70 text-sm">
                    Mentoring junior developers and helping teams level up their frontend development skills.
                </p>
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    <!-- Awards Section -->
    <section id="awards" class="mb-16">
        <h2 class="text-sm text-text-secondary mb-6">Awards & Recognition</h2>

        <div class="grid md:grid-cols-2 gap-6">
            <!-- Award Item -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
                            🏆
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium mb-1">Developer of the Year</h3>
                        <p class="text-sm text-text-secondary mb-2">Tech Awards 2023</p>
                        <p class="text-sm text-black/70">
                            Recognized for outstanding contributions to open-source and innovative web solutions.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Award Item -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                            🥇
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium mb-1">Best Web Design</h3>
                        <p class="text-sm text-text-secondary mb-2">Awwwards - Site of the Day</p>
                        <p class="text-sm text-black/70">
                            Portfolio project recognized for exceptional design and user experience.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Award Item -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                            ⭐
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium mb-1">Innovation Award</h3>
                        <p class="text-sm text-text-secondary mb-2">Startup Summit 2022</p>
                        <p class="text-sm text-black/70">
                            Awarded for developing an innovative solution that improved team productivity by 60%.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Award Item -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                            🎖️
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium mb-1">Top Contributor</h3>
                        <p class="text-sm text-text-secondary mb-2">GitHub - React Community</p>
                        <p class="text-sm text-black/70">
                            Recognized as one of the top 100 contributors to React ecosystem packages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    <!-- Recommendations Section -->
    <section id="recommendations" class="mb-16">
        <h2 class="text-sm text-text-secondary mb-6">What people say</h2>

        <div class="grid md:grid-cols-2 gap-6">
            <!-- Recommendation Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div>
                        <h4 class="font-medium">Sarah Johnson</h4>
                        <p class="text-sm text-text-secondary">Product Manager at TechCorp</p>
                    </div>
                </div>
                <p class="text-black/70 text-sm leading-relaxed">
                    "Alex is an exceptional developer. Their attention to detail and ability to solve complex problems is outstanding. They consistently deliver high-quality work and are a pleasure to work with."
                </p>
            </div>

            <!-- Recommendation Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500"></div>
                    <div>
                        <h4 class="font-medium">Michael Chen</h4>
                        <p class="text-sm text-text-secondary">CTO at StartupHub</p>
                    </div>
                </div>
                <p class="text-black/70 text-sm leading-relaxed">
                    "Working with Alex was a game-changer for our team. They brought modern best practices and helped us build a scalable architecture that supports our rapid growth."
                </p>
            </div>

            <!-- Recommendation Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                    <div>
                        <h4 class="font-medium">Emily Rodriguez</h4>
                        <p class="text-sm text-text-secondary">Lead Designer at Creative Co.</p>
                    </div>
                </div>
                <p class="text-black/70 text-sm leading-relaxed">
                    "Alex bridges the gap between design and development perfectly. They understand both the technical and creative aspects, making collaboration seamless and enjoyable."
                </p>
            </div>

            <!-- Recommendation Card -->
            <div class="bg-white rounded-2xl p-6 border border-border-light">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                    <div>
                        <h4 class="font-medium">David Park</h4>
                        <p class="text-sm text-text-secondary">Senior Developer at Digital Agency</p>
                    </div>
                </div>
                <p class="text-black/70 text-sm leading-relaxed">
                    "I've learned so much from Alex. Their mentorship helped me grow as a developer. They're always willing to share knowledge and help the team succeed."
                </p>
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    <!-- Contact Section -->
    <section id="contact" class="mb-16">
        <h2 class="text-sm text-text-secondary mb-6">Get in touch</h2>

        <div class="bg-white rounded-2xl p-8 md:p-12 border border-border-light">
            <div class="max-w-2xl">
                <h3 class="text-2xl md:text-3xl font-medium mb-4">Let's work together</h3>
                <p class="text-base text-black/70 leading-relaxed mb-8">
                    I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <!-- Email -->
                    <a href="mailto:cataldo.diego@gmail.com" class="flex items-start gap-4 p-4 rounded-xl hover:bg-black/5 transition-colors group">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#3b82f6">
                                <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium mb-1">Email</h4>
                            <p class="text-sm text-text-secondary">cataldo.diego@gmail.com</p>
                        </div>
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://linkedin.com/in/diegocataldo" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 rounded-xl hover:bg-black/5 transition-colors group">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#a855f7">
                                <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium mb-1">LinkedIn</h4>
                            <p class="text-sm text-text-secondary">linkedin.com/in/diegocataldo</p>
                        </div>
                    </a>

                    <!-- GitHub -->
                    <a href="https://github.com/catuy" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 rounded-xl hover:bg-black/5 transition-colors group">
                        <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#374151">
                                <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium mb-1">GitHub</h4>
                            <p class="text-sm text-text-secondary">github.com/catuy</p>
                        </div>
                    </a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com/c______do/" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 rounded-xl hover:bg-black/5 transition-colors group">
                        <div class="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#ec4899">
                                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium mb-1">Instagram</h4>
                            <p class="text-sm text-text-secondary">@c______do</p>
                        </div>
                    </a>
                </div>

                <div class="pt-6 border-t border-border-light">
                    <p class="text-sm text-text-secondary mb-4">Or send me a direct message:</p>
                    <a href="mailto:cataldo.diego@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" class="opacity-50">
                            <path d="M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"></path>
                        </svg>
                        <span>Send me an email</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>
