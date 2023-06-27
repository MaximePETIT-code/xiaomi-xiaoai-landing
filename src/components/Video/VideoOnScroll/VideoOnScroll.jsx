import styles from './VideoOnScroll.module.scss'
import cn from 'clsx'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CanvasVideo } from '../CanvasVideo/CanvasVideo'
import PropTypes from 'prop-types'

gsap.registerPlugin(ScrollTrigger)

export function VideoOnScroll({
  className,
  count,
  folder,
  pad,
  extension = 'png',
}) {
  const wrapperRef = useRef()
  const videoRef = useRef()

  useEffect(() => {
    gsap.set(wrapperRef.current, { clearProps: 'all' })

    const timeline1 = gsap
      .timeline({
        scrollTrigger: {
          id: 'video-fade',
          trigger: wrapperRef.current,
          start: 'top top+=50%',
          end: 'top top',
          scrub: true,
        },
      })
      .from(wrapperRef.current, {
        opacity: 0,
        ease: 'none',
      })

    const timeline2 = gsap
      .timeline({
        scrollTrigger: {
          id: 'image-fade',
          trigger: wrapperRef.current,
          start: 'bottom bottom+=40%',
          end: 'bottom bottom-=20%',
          scrub: true,
        },
      })
      .to(wrapperRef.current, {
        opacity: 0,
        ease: 'none',
      })

    return () => {
      timeline1.kill()
      timeline2.kill()
    }
  }, [])

  useEffect(() => {
    const timeline = new gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top+=50%',
        end: 'bottom bottom-=20%',
        scrub: true,
        onUpdate: ({ progress }) => {
          videoRef.current.progress(progress)
        },
      },
    })

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <div ref={wrapperRef} className={cn(styles['video-on-scroll'], className)}>
      <CanvasVideo
        className={styles.sticky}
        folder={folder}
        count={count}
        pad={pad}
        ref={videoRef}
        extension={extension}
      />
    </div>
  )
}

VideoOnScroll.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  folder: PropTypes.string.isRequired,
  pad: PropTypes.number,
  extension: PropTypes.string,
};
