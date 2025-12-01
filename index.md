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

    {% include projects-section.html %}

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    {% include services-section.html %}

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    {% include awards-section.html %}

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    {% include recommendations-section.html %}

    <!-- Divider -->
    <div class="border-t border-dashed border-black/10 mb-12"></div>

    {% include contact-section.html %}

</main>
