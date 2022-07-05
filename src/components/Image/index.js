import { useState } from 'react';
import images from '@/assets/images'

function Image({
    src,
    alt,
    className,
    fallBack: customFallBack = images.noImage,
    ...props
}) {
    const [ fallBack, setFallBack ] = useState('')
    const handleError = () => {
        setFallBack(customFallBack)
    }
  return (
    <img 
        className={className}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError}
    />
    )
}

export default Image