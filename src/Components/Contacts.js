/*<div>
    {src && (
        <Image
        circular
        width={45}
        heigth={45}
        src={src}
        style={style}
        className={className}
        />
    )}

    {!src && (
        <div style={style} className={`thumbnail ${className}`}>
        <span>{getInitials}()}</span>
        </div>
        )}
    </div>
    );
};

</div>

export default ImageThumb;