<template>
  <div class="font-body-md text-on-surface bg-black min-h-screen">
    <!-- NAVIGATION SHELL -->
    <nav
      id="main-nav"
      class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop border-b border-white/5 transition-all duration-300 ease-in-out"
      :class="scrollY > 50 ? 'bg-black/90 backdrop-blur-sm py-sm' : 'bg-transparent py-md'"
    >
      <div class="flex items-center gap-base">
        <span class="font-headline-md text-headline-md font-black text-on-surface tracking-tighter">{{ brandName }}</span>
      </div>
      <div class="hidden md:flex gap-lg items-center">
        <a class="nav-link text-on-surface" href="#">Home</a>
        <a class="nav-link text-on-surface" href="#services">Services</a>
        <a class="nav-link text-on-surface" href="#offers">Projects</a>
        <a class="nav-link text-on-surface" href="#about">About</a>
        <a class="nav-link text-on-surface" href="#contact">Contact</a>
      </div>
      <button class="bg-primary-container text-white px-md py-xs font-label-caps uppercase hover:bg-white hover:text-primary-container transition-all duration-300">
        Request Quote
      </button>
    </nav>

    <main>
      <!-- HERO SECTION -->
      <section
        ref="hero"
        @mousemove="handlePointerMove"
        @mouseenter="stopSlideShow"
        @mouseleave="() => { handlePointerLeave(); startSlideShow() }"
        class="relative min-h-[70vh] pt-[90px] pb-lg flex flex-col items-center justify-start overflow-hidden px-margin-desktop text-center bg-black"
      >
        <div class="absolute inset-0 z-0" :style="heroBackgroundStyle"></div>
        <!-- Hero Content -->
        <div class="max-w-5xl z-10 fade-in-on-scroll" style="animation-delay: 0.2s">
          <h2 class="font-headline-xl text-[clamp(2.75rem,6vw,4.5rem)] text-white mb-md uppercase leading-tight tracking-tighter animate-fade-in-up">
            Your building and construction experts
          </h2>
          <h5 class="font-headline-lg text-primary-container mb-xl tracking-[0.18em] uppercase animate-fade-in-up" style="animation-delay: 0.1s">
            in Ghana
          </h5>
        </div>

        <!-- <div class="w-full max-w-2xl relative z-20 mb-lg fade-in-on-scroll">
            <div
              class="relative overflow-hidden rounded-[32px] aspect-[1.9/1]"
              :style="sceneStyle"
            >
              <img
                alt="Completed building"
                class="absolute inset-0 w-full h-full object-scale-down"
                src="/hero_building_(2).png"
              />

              <div
                class="absolute inset-0 overflow-hidden"
                :style="beforeMaskStyle"
              >
                <img
                  alt="Unfinished building"
                  class="absolute inset-0 w-full h-full object-scale-down"
                  src="/hero_building_(1).png"
                />
              </div>

              <div
                class="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
                :style="revealStyle"
              >
                <div class="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 bg-red-500/70 shadow-[0_0_24px_rgba(214,40,40,0.6)] blur-sm" />
                <div class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/55 shadow-[0_0_20px_rgba(214,40,40,0.55)]" />
              </div>
            </div>
        </div> -->

        <div class="w-full max-w-4xl mx-auto mb-10 px-4 py-3 rounded-full bg-surface-container/80 border border-white/10 text-white/80 text-sm tracking-[0.2em] uppercase shadow-lg backdrop-blur-xl">
          <span class="font-label-caps text-primary-container mr-2">Location: </span>
          AK-846-2803, Kumasi, Ghana 00233
        </div>
      </section> 

      <!-- ABOUT SECTION -->
      <section class="py-lg px-margin-desktop border-t border-white/10 bg-black fade-in-on-scroll" id="about">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div class="lg:col-span-4">
            <h2 class="font-label-caps text-primary-container mb-sm animate-slide-in-left">{{ brandName }} OVERVIEW</h2>
            <h3 class="font-headline-lg text-white uppercase mb-md animate-slide-in-left" style="animation-delay: 0.1s">BUILDING GHANA'S FUTURE</h3>
          </div>
          <div class="lg:col-span-8 border-l border-white/10 pl-lg">
            <p class="font-body-lg text-on-secondary-container mb-md leading-relaxed fade-in-on-scroll">
              {{ brandNameLong }} stands at the forefront of the construction sector in Ghana. We bridge the gap between traditional reliability and modern technical mastery. We focus on structural integrity, precision engineering, and the unapologetic pursuit of industrial excellence.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-sm mt-lg">
              <div class="bg-surface-container p-md border border-white/5 fade-in-on-scroll hover:border-primary-container transition-all duration-300 cursor-pointer" style="animation-delay: 0s">
                <span class="font-headline-md text-white block">24+</span>
                <span class="font-label-caps text-xs text-secondary">PROJECTS</span>
              </div>
              <div class="bg-surface-container p-md border border-white/5 fade-in-on-scroll hover:border-primary-container transition-all duration-300 cursor-pointer" style="animation-delay: 0.1s">
                <span class="font-headline-md text-white block">100%</span>
                <span class="font-label-caps text-xs text-secondary">SAFETY</span>
              </div>
              <div class="bg-surface-container p-md border border-white/5 fade-in-on-scroll hover:border-primary-container transition-all duration-300 cursor-pointer" style="animation-delay: 0.2s">
                <span class="font-headline-md text-white block">08+</span>
                <span class="font-label-caps text-xs text-secondary">YEARS</span>
              </div>
              <div class="bg-surface-container p-md border border-white/5 fade-in-on-scroll hover:border-primary-container transition-all duration-300 cursor-pointer" style="animation-delay: 0.3s">
                <span class="font-headline-md text-white block">KMS</span>
                <span class="font-label-caps text-xs text-secondary">REGION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

  
       <!-- SERVICES SECTION -->
      <section id="services" class="border-t border-white/10 p-20 bg-transparent flex flex-col gap-[350px]">      
        <!-- SECTION HEADER -->
        <div class="mb-24">
          <p class="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            OUR EXPERTISE
          </p>

          <h2 class="font-headline-sm text-[clamp(2rem,4vw,3rem)] text-white mb-6 uppercase leading-tight tracking-tighter animate-fade-in-up">
            Integrated <span class="text-red-500">Property Solutions</span>
          </h2>

          <p class="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed">
            From financing and investment guidance to independent property evaluation, 
            we provide the expertise needed to make confident real-estate decisions.
          </p>
        </div>

        <!-- FINANCE SUB-SECTION -->
        <div id="finance" class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- IMAGE -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full"></div>
            <img 
              src="/finance-keys.png" 
              alt="Finance keys representing property financing" 
              class="relative w-full h-[550px] object-scale-down rounded-3xl shadow-2xl transition duration-700 group-hover:scale-[1.02] animate-slide-in-left" 
            />
          </div>

          <!-- CONTENT -->
          <div>
            <span class="text-red-500 uppercase tracking-[0.25em] text-sm font-semibold">
              FINANCIAL SERVICES
            </span>

            <h3 class="font-headline-sm text-[clamp(1rem,3vw,2rem)] text-white mb-6 uppercase leading-tight tracking-tighter animate-fade-in-up">
              Financing Built <br /> Around Your Vision
            </h3>

            <p class="mt-8 text-lg text-gray-400 leading-relaxed">
              Whether you're purchasing your first property, expanding your investment portfolio, 
              or funding a large-scale development, we help structure financing solutions that 
              support long-term success.
            </p>

            <div class="mt-10 space-y-6">
              <div class="flex gap-5">
                <span class="text-red-500 font-black">01</span>
                <p class="text-gray-300">Flexible Funding Structures</p>
              </div>
              <div class="flex gap-5">
                <span class="text-red-500 font-black">02</span>
                <p class="text-gray-300">Access To Trusted Financial Partners</p>
              </div>
              <div class="flex gap-5">
                <span class="text-red-500 font-black">03</span>
                <p class="text-gray-300">Guidance From Application To Approval</p>
              </div>
            </div>

            <button type="button" class="mt-10 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300">
              Explore Financing
            </button>
          </div>
        </div>

        <!-- RATING / EVALUATION SUB-SECTION -->
        <div id="rating" class="grid lg:grid-cols-2 gap-16 items-center"> 
          <!-- CONTENT -->
          <div>
            <span class="text-red-500 uppercase tracking-[0.25em] text-sm font-semibold">
              PROPERTY EVALUATION
            </span>

            <h3 class="font-headline-sm text-[clamp(1rem,3vw,2rem)] text-white mb-6 uppercase leading-tight tracking-tighter animate-fade-in-up">
              Independent <br /> Assessments You Can Trust
            </h3>

            <p class="mt-8 text-lg text-gray-400 leading-relaxed">
              Our evaluation services provide clear insights into property value, structural integrity, 
              and investment potential. We help buyers, investors, and institutions make informed 
              decisions with confidence.
            </p>

            <div class="mt-10 space-y-6">
              <div class="flex gap-5">
                <span class="text-red-500 font-black">01</span>
                <p class="text-gray-300">Property Valuation Reports</p>
              </div>
              <div class="flex gap-5">
                <span class="text-red-500 font-black">02</span>
                <p class="text-gray-300">Structural Integrity Assessments</p>
              </div>
              <div class="flex gap-5">
                <span class="text-red-500 font-black">03</span>
                <p class="text-gray-300">Compliance & Risk Analysis</p>
              </div>
            </div>

            <button type="button" class="mt-10 px-8 py-4 border border-red-500 text-white hover:bg-red-600 rounded-xl font-semibold transition-all duration-300">
              Request Evaluation
            </button>
          </div>

          <!-- IMAGE -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full"></div>
            <img 
              src="/finance-keys.png" 
              alt="Property evaluation and assessment" 
              class="relative w-full h-[550px] object-scale-down rounded-3xl shadow-2xl transition duration-700 group-hover:scale-[1.02]" 
            />
          </div>
        </div>

        <!-- FINANCE SUB-SECTION -->
        <div id="finance" class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- IMAGE -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full"></div>
            <img 
              src="/finance-keys.png" 
              alt="Finance keys representing property financing" 
              class="relative w-full h-[550px] object-scale-down rounded-3xl shadow-2xl transition duration-700 group-hover:scale-[1.02] animate-slide-in-left" 
            />
          </div>

          <!-- CONTENT -->
          <div>
            <span class="text-red-500 uppercase tracking-[0.25em] text-sm font-semibold">
              FINANCIAL SERVICES
            </span>

            <h3 class="font-headline-sm text-[clamp(1rem,3vw,2rem)] text-white mb-6 uppercase leading-tight tracking-tighter animate-fade-in-up">
              Financing Built <br /> Around Your Vision
            </h3>

            <p class="mt-8 text-lg text-gray-400 leading-relaxed">
              Whether you're purchasing your first property, expanding your investment portfolio, 
              or funding a large-scale development, we help structure financing solutions that 
              support long-term success.
            </p>

            <div class="mt-10 space-y-6">
              <div class="flex gap-5">
                <span class="text-red-500 font-black">01</span>
                <p class="text-gray-300">Flexible Funding Structures</p>
              </div>
              <div class="flex gap-5">
                <span class="text-red-500 font-black">02</span>
                <p class="text-gray-300">Access To Trusted Financial Partners</p>
              </div>
              <div class="flex gap-5">
                <span class="text-red-500 font-black">03</span>
                <p class="text-gray-300">Guidance From Application To Approval</p>
              </div>
            </div>

            <button type="button" class="mt-10 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300">
              Explore Financing
            </button>
          </div>
        </div>
      </section>


      <!-- PROJECTS -->
      <section class="py-xl px-margin-desktop bg-black fade-in-on-scroll" id="offers">
        <div class="mb-lg border-b border-white/10 pb-md flex justify-between items-center">
          <h2 class="font-headline-lg text-white uppercase animate-slide-in-left">FEATURED PROJECTS</h2>
          <div class="flex gap-sm">
            <button class="p-sm border border-white/10 hover:bg-white/5 transition-colors hover:scale-110">
              <ArrowLeft class="w-5 h-5 text-on-surface" />
            </button>
            <button class="p-sm border border-white/10 hover:bg-white/5 transition-colors hover:scale-110">
              <ArrowRight class="w-5 h-5 text-on-surface" />
            </button>
          </div>
        </div>
        
        <!-- Flex container with items-start prevents other cards from stretching when one grows in height -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          
          <!-- Project Card 1 -->
          <article class="group flex-1 transition-all duration-700 ease-in-out md:hover:flex-[3] relative overflow-hidden bg-surface-container border border-white/5 hover:shadow-2xl flex flex-col md:flex-row rounded-lg fade-in-on-scroll slide-in-left" style="animation-delay: 0s">
            
            <!-- LEFT PART: Original Card Content (Maintains original height) -->
            <div class="w-full md:group-hover:w-[35%] transition-all duration-700 flex-shrink-0 flex flex-col overflow-hidden">
              <div class="aspect-video relative overflow-hidden">
                <img alt="Modern Residential" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/beautiful-home-2826052_1920.jpg.jpeg"/>
                <div class="absolute top-0 right-0 bg-primary-container px-sm py-xs font-label-caps text-[10px] text-white">FOR SALE</div>
              </div>
              <div class="p-md flex-1 flex flex-col">
                <h4 class="font-headline-md text-white mb-xs uppercase">RESIDENTIAL ALPHA</h4>
                <p class="font-data-mono text-xs text-secondary mb-md">KUMASI, GHANA | 2023</p>
                
                <!-- Original SEE EXPOSÈ link (collapses on desktop hover) -->
                <a class="flex items-center gap-xs font-label-caps text-primary-container hover:gap-md transition-all hover:text-white md:group-hover:opacity-0 md:group-hover:max-h-0 overflow-hidden" href="#">
                  SEE EXPOSÈ <ArrowForward class="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- RIGHT PART: Expanded Content (Starts at 0 height, grows on hover) -->
            <div class="flex-1 overflow-hidden">
              <div class="max-w-0 max-h-0 md:group-hover:max-w-[1000px] md:group-hover:max-h-[800px] opacity-0 md:group-hover:opacity-100 overflow-hidden transition-all duration-700 delay-200">
                <div class="p-md flex flex-col justify-between border-l border-white/10 min-w-[300px] h-full">
                  <div>
                    <h5 class="text-white text-lg font-bold mb-2 uppercase">Project Overview</h5>
                    <p class="text-secondary text-sm mb-4 leading-relaxed">
                      A modern residential complex featuring sustainable design, smart home integration, and premium amenities tailored for modern living.
                    </p>
                    <!-- Extra Photo -->
                    <div class="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                      <img src="/beautiful-home-2826052_1920.jpg.jpeg" class="w-full h-full object-cover" alt="Detail view" />
                    </div>
                    <!-- Details Grid -->
                    <div class="grid grid-cols-2 gap-3 text-xs text-secondary">
                      <div><span class="text-white font-bold">Area:</span> 450 sqm</div>
                      <div><span class="text-white font-bold">Beds:</span> 4</div>
                      <div><span class="text-white font-bold">Baths:</span> 3</div>
                      <div><span class="text-white font-bold">Status:</span> Completed</div>
                    </div>
                  </div>
                  <!-- SEE EXPOSÈ moved to the bottom -->
                  <a class="flex items-center gap-xs font-label-caps text-primary-container hover:gap-md transition-all hover:text-white mt-6 font-semibold" href="#">
                    SEE EXPOSÈ <ArrowForward class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </article>

          <!-- Project Card 2 -->
          <article class="group flex-1 transition-all duration-700 ease-in-out md:hover:flex-[3] relative overflow-hidden bg-surface-container border border-white/5 hover:shadow-2xl flex flex-col md:flex-row rounded-lg fade-in-on-scroll slide-in-right" style="animation-delay: 0.1s">
            
            <!-- LEFT PART -->
            <div class="w-full md:group-hover:w-[35%] transition-all duration-700 flex-shrink-0 flex flex-col overflow-hidden">
              <div class="aspect-video relative overflow-hidden">
                <img alt="Luxury Estate" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/house_1.jpeg"/>
                <div class="absolute top-0 right-0 bg-primary-container px-sm py-xs font-label-caps text-[10px] text-white">LEASED</div>
              </div>
              <div class="p-md flex-1 flex flex-col">
                <h4 class="font-headline-md text-white mb-xs uppercase">ESTATE DELTA</h4>
                <p class="font-data-mono text-xs text-secondary mb-md">ACCRA, GHANA | 2024</p>
                <a class="flex items-center gap-xs font-label-caps text-primary-container hover:gap-md transition-all hover:text-white md:group-hover:opacity-0 md:group-hover:max-h-0 overflow-hidden" href="#">
                  SEE EXPOSÈ <ArrowForward class="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- RIGHT PART -->
            <div class="flex-1 overflow-hidden">
              <div class="max-w-0 max-h-0 md:group-hover:max-w-[1000px] md:group-hover:max-h-[800px] opacity-0 md:group-hover:opacity-100 overflow-hidden transition-all duration-700 delay-200">
                <div class="p-md flex flex-col justify-between border-l border-white/10 min-w-[300px] h-full">
                  <div>
                    <h5 class="text-white text-lg font-bold mb-2 uppercase">Project Overview</h5>
                    <p class="text-secondary text-sm mb-4 leading-relaxed">
                      An exclusive luxury estate offering panoramic views, high-end finishes, and unparalleled privacy in the heart of the city.
                    </p>
                    <div class="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                      <img src="/house_1.jpeg" class="w-full h-full object-cover" alt="Detail view" />
                    </div>
                    <div class="grid grid-cols-2 gap-3 text-xs text-secondary">
                      <div><span class="text-white font-bold">Area:</span> 800 sqm</div>
                      <div><span class="text-white font-bold">Beds:</span> 6</div>
                      <div><span class="text-white font-bold">Baths:</span> 5</div>
                      <div><span class="text-white font-bold">Status:</span> Leased</div>
                    </div>
                  </div>
                  <a class="flex items-center gap-xs font-label-caps text-primary-container hover:gap-md transition-all hover:text-white mt-6 font-semibold" href="#">
                    SEE EXPOSÈ <ArrowForward class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </article>

          <!-- Project Card 3 -->
          <article class="group flex-1 transition-all duration-700 ease-in-out md:hover:flex-[3] relative overflow-hidden bg-surface-container border border-white/5 hover:shadow-2xl flex flex-col md:flex-row rounded-lg fade-in-on-scroll slide-in-left" style="animation-delay: 0.2s">
            
            <!-- LEFT PART -->
            <div class="w-full md:group-hover:w-[35%] transition-all duration-700 flex-shrink-0 flex flex-col overflow-hidden">
              <div class="aspect-video relative overflow-hidden">
                <img alt="Coastal Villa" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/ialicante-mediterranean-homes-475777-unsplash.jpg.jpeg"/>
                <div class="absolute top-0 right-0 bg-primary-container px-sm py-xs font-label-caps text-[10px] text-white">FOR SALE</div>
              </div>
              <div class="p-md flex-1 flex flex-col">
                <h4 class="font-headline-md text-white mb-xs uppercase">VILLA SIGMA</h4>
                <p class="font-data-mono text-xs text-secondary mb-md">CAPE COAST | 2023</p>
                <a class="flex items-center gap-xs font-label-caps text-primary-container hover:gap-md transition-all hover:text-white md:group-hover:opacity-0 md:group-hover:max-h-0 overflow-hidden" href="#">
                  SEE EXPOSÈ <ArrowForward class="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- RIGHT PART -->
            <div class="flex-1 overflow-hidden">
              <div class="max-w-0 max-h-0 md:group-hover:max-w-[1000px] md:group-hover:max-h-[800px] opacity-0 md:group-hover:opacity-100 overflow-hidden transition-all duration-700 delay-200">
                <div class="p-md flex flex-col justify-between border-l border-white/10 min-w-[300px] h-full">
                  <div>
                    <h5 class="text-white text-lg font-bold mb-2 uppercase">Project Overview</h5>
                    <p class="text-secondary text-sm mb-4 leading-relaxed">
                      A stunning coastal villa blending modern architecture with natural surroundings, featuring private beach access and infinity pools.
                    </p>
                    <div class="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                      <img src="/ialicante-mediterranean-homes-475777-unsplash.jpg.jpeg" class="w-full h-full object-cover" alt="Detail view" />
                    </div>
                    <div class="grid grid-cols-2 gap-3 text-xs text-secondary">
                      <div><span class="text-white font-bold">Area:</span> 600 sqm</div>
                      <div><span class="text-white font-bold">Beds:</span> 5</div>
                      <div><span class="text-white font-bold">Baths:</span> 4</div>
                      <div><span class="text-white font-bold">Status:</span> Available</div>
                    </div>
                  </div>
                  <a class="flex items-center gap-xs font-label-caps text-primary-container hover:gap-md transition-all hover:text-white mt-6 font-semibold" href="#">
                    SEE EXPOSÈ <ArrowForward class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

      <!-- CONTACT -->
      <section class="py-xl px-margin-desktop bg-surface-dim border-t border-white/5 fade-in-on-scroll" id="contact">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <div>
            <h2 class="font-label-caps text-primary-container mb-sm animate-slide-in-left">CONTACT</h2>
            <h3 class="font-headline-lg text-white uppercase mb-lg animate-slide-in-left" style="animation-delay: 0.1s">START YOUR PROJECT</h3>
            <div class="space-y-lg">
              <div class="flex gap-md items-center fade-in-on-scroll hover:translate-x-2 transition-transform">
                <div class="w-12 h-12 bg-primary-container flex items-center justify-center">
                  <MapPin class="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-label-caps text-secondary text-xs">HEADQUARTERS</h4>
                  <p class="text-white">AK-846-2803, Kumasi, Ghana</p>
                </div>
              </div>
              <div class="flex gap-md items-center fade-in-on-scroll hover:translate-x-2 transition-transform">
                <div class="w-12 h-12 bg-primary-container flex items-center justify-center">
                  <Mail class="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-label-caps text-secondary text-xs">EMAIL</h4>
                  <p class="text-white">info@cladalconstruction.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-black p-lg border border-white/10 industrial-shadow fade-in-on-scroll hover:shadow-xl transition-all">
            <form class="space-y-md">
              <input class="w-full bg-surface-container border border-white/10 focus:border-primary-container text-white px-md py-sm transition-all focus:shadow-lg" placeholder="NAME" type="text"/>
              <input class="w-full bg-surface-container border border-white/10 focus:border-primary-container text-white px-md py-sm transition-all focus:shadow-lg" placeholder="EMAIL" type="email"/>
              <textarea class="w-full bg-surface-container border border-white/10 focus:border-primary-container text-white px-md py-sm transition-all focus:shadow-lg" placeholder="MESSAGE" rows="4"></textarea>
              <button class="w-full bg-primary-container text-white py-md font-label-caps uppercase tracking-widest hover:bg-white hover:text-primary-container transition-all hover:shadow-lg" type="submit">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- MAP SIMULATION -->
      <section class="h-64 bg-black grayscale contrast-125 brightness-50 flex items-center justify-center border-y border-white/5 fade-in-on-scroll">
        <div class="border-2 border-primary-container p-lg bg-black/80 backdrop-blur-md hover:scale-105 transition-transform">
          <p class="font-label-caps text-white">{{ brandName }} OPERATIONS AREA: KUMASI</p>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="bg-black text-primary-container font-data-mono text-xs flex flex-col md:flex-row justify-between items-center px-margin-desktop py-xl w-full border-t border-white/5">
      <div>
        <span class="font-headline-md font-black text-on-surface uppercase">{{ brandName }}.</span>
        <p class="mt-xs text-on-secondary-container">© 2024 {{ brandNameFull }}. ALL RIGHTS RESERVED.</p>
      </div>
      <div class="flex gap-lg mt-lg md:mt-0 uppercase tracking-widest text-[10px]">
        <a class="text-on-secondary-container hover:text-primary-container transition-colors" href="#">Privacy</a>
        <a class="text-on-secondary-container hover:text-primary-container transition-colors" href="#">Terms</a>
        <a class="text-on-secondary-container hover:text-primary-container transition-colors" href="#">Safety</a>
      </div>
    </footer>
  </div>
</template>














<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight as ArrowForward,
  MapPin,
  Mail,
} from '@lucide/vue'

// Brand configuration
const brandName = 'CLADEL'
const brandNameFull = 'CLADEL CONSTRUCTION'
const brandNameLong = 'Cladel Construction'

// Nav scroll behavior
const { y: scrollY } = useWindowScroll()

const hero = ref<HTMLElement | null>(null)
const currentX = ref(0)
const currentY = ref(50)
const targetX = ref(0)
const targetY = ref(50)
const animationFrame = ref<number | null>(null)
const slideIndex = ref(0)
const slideInterval = ref<number | null>(null)
const observerRef = ref<IntersectionObserver | null>(null)
const slides = [
  '/house 1.jpeg',
  '/ialicante-mediterranean-homes-475777-unsplash.jpg.jpeg'
]

// Services sections (Selling & Renting) — simplified static sections (no carousel)

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const animateScene = () => {
  currentX.value += (targetX.value - currentX.value) * 0.08
  currentY.value += (targetY.value - currentY.value) * 0.08

  if (Math.abs(targetX.value - currentX.value) > 0.15 || Math.abs(targetY.value - currentY.value) > 0.15) {
    animationFrame.value = window.requestAnimationFrame(animateScene)
  } else {
    currentX.value = targetX.value
    currentY.value = targetY.value
    animationFrame.value = null
  }
}

const setPointer = (clientX: number, clientY: number) => {
  if (!hero.value) return
  const rect = hero.value.getBoundingClientRect()
  targetX.value = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100)
  targetY.value = clamp(((clientY - rect.top) / rect.height) * 100, 0, 100)
  if (animationFrame.value === null) {
    animationFrame.value = window.requestAnimationFrame(animateScene)
  }
}

const handlePointerMove = (event: MouseEvent) => {
  setPointer(event.clientX, event.clientY)
}

const handlePointerLeave = () => {
  targetX.value = 0
  targetY.value = 50
  if (animationFrame.value === null) {
    animationFrame.value = window.requestAnimationFrame(animateScene)
  }
}

const heroBackgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.42) 25%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.88) 100%), url(${slides[slideIndex.value]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#0b0b0b',
  filter: 'brightness(0.64) contrast(1.08)',
  transition: 'background-image 1s ease-in-out, filter 1s ease-in-out',
}))

const startSlideShow = () => {
  if (slideInterval.value !== null) return
  slideInterval.value = window.setInterval(() => {
    slideIndex.value = (slideIndex.value + 1) % slides.length
  }, 6500)
}

const stopSlideShow = () => {
  if (slideInterval.value !== null) {
    window.clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

onMounted(() => {
  startSlideShow()

  // basic scroll reveal observer for `.fade-in-on-scroll` elements
  observerRef.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement
      if (entry.isIntersecting) {
        el.classList.add('in-view')
      } else {
        el.classList.remove('in-view')
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
    observerRef.value?.observe(el)
  })
  // services carousel removed
})

onUnmounted(() => {
  if (animationFrame.value !== null) {
    window.cancelAnimationFrame(animationFrame.value)
  }
  stopSlideShow()
  if (observerRef.value) observerRef.value.disconnect()
})
</script>
