import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const About = () => {
  const ref = useRef()
  const ref1 = useRef()
  const ref2 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const element = ref.current
    gsap
      .timeline()
      .to(".heading .content h1", { opacity: 1, duration: 1, y: 0 })
      .to(".btn__content a", { opacity: 1, y: 0, stagger: 0.2 })
      .to(".lottie", { opacity: 1, duration: 1 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          scrub: true,
          end: "200% bottom",
          pin: true,
        },
      })
      .set(".text-one", { css: { zIndex: 1 } })
      .set("header", { css: { zIndex: 999 } })
      .set(".cursor", { css: { zIndex: 999 } })
      // .from(".text-one .an-1", { y: "-20%" })
      .from(".text-one .bold", { y: "100vh" })
    const element1 = ref1.current
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element1,
          start: "top top",
          scrub: true,
          end: "200% bottom",
          pin: true,
        },
      })
      // .from(".text-two .an-2", { y: "-20%" })
      .from(".text-two .bold", { y: "100vh" })
    const element2 = ref2.current
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element2,
          start: "top top",
          scrub: true,
          end: "200% bottom",
          pin: true,
        },
      })
      .from(".text-three a", { opacity: 0, y: "-20%", stagger: 0.5 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".carrusel",
          start: "top top",
          scrub: true,
          end: "500% bottom",
          pin: true,
        },
      })
      .to(".cerot", { opacity: 0 })
      .to(".uno", { x: "0vw" })
      .to(".unot", { opacity: 0 })
      .to(".dos", { x: "0vw" })
      .to(".dost", { opacity: "0" })
      .to(".tres", { x: "0vw" })

    gsap.timeline({
      scrollTrigger: {
        trigger: ".cites",
        start: "top center",
        onEnter: () => {
          document.querySelector(".cites").classList.add("active")
        },
      },
    })
  }, [])

  return (
    <section>
      <div className="text_animation text-one" ref={ref} id="acerca">
        <p>
          <span className="an-1">
            Ya sea propietario de una empresa o administre un equipo
          </span>
          <span className="bold">necesita saber cómo obtener resultados.</span>
        </p>
      </div>
      <div className="text_animation text-two" ref={ref1}>
        <p>
          <span className="an-2">
            Brindamos servicios de diseño y desarrollo que no solo aumentarán la
            visibilidad y los ingresos de su empresa,
          </span>
          <span className="bold">
            sino que también le ahorrarán tiempo y recursos.
          </span>
        </p>
      </div>
      <div className="text_animation text-three" ref={ref2}>
        <p>¿Como te podemos ayudar?</p>
        <a href="#about" className="link-1">
          Diseño Web
        </a>
        <a href="#about" className="link-2">
          SEO
        </a>
        <a href="#about" className="link-3">
          Web Hosting
        </a>
        <a href="#about" className="link-4">
          E-commerce
        </a>
      </div>
    </section>
  )
}

export default About
