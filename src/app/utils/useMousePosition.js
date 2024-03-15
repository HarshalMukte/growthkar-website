"use client"
import React, { useEffect, useState } from 'react'

const UseMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x:0, y:0})

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, [])
    
  return mousePosition
}

export default UseMousePosition