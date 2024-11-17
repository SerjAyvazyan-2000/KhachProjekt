import {
    CSSProperties,
    ForwardedRef,
    forwardRef,
    HTMLAttributes,
    ReactNode,
} from "react";

export type StackProps = {
    width?: "fill" | "fitContent";
    direction?: "column" | "row" | "column-reverse" | "row-reverse";
    align?: "start" | "center" | "end" | "initial";
    justify?:
        | "start"
        | "center"
        | "end"
        | "space-between"
        | "space-evenly"
        | "space-around";
    gap?: string | number;
    children: ReactNode;
};

export const Stack = forwardRef(function Stack(
    {
        width,
        direction = "column",
        align = "start",
        justify = "start",
        gap = 0,
        className,
        style,
        children,
        ...divProps
    }: StackProps & HTMLAttributes<HTMLDivElement>,
    ref: ForwardedRef<HTMLDivElement>
)
{


    const styleOptions: CSSProperties = {
        ...style,
    }


    if (width) {
        styleOptions.width = width === 'fitContent' ? 'max-content' : '100%'
    }


    return (
        <div
            className={className}
            ref={ref}
            {...divProps}
            style={
                {
                    ...styleOptions,
                    display: 'flex',
                    flexDirection: direction,
                    alignItems:
                        align === "start"
                            ? "flex-start"
                            : align === "end"
                                ? "flex-end"
                                : align,
                    justifyContent:
                        justify === "start"
                            ? "flex-start"
                            : justify === "end"
                                ? "flex-end"
                                : justify,
                    gap: typeof gap === "number" ? `${gap}px` : gap,
                } as CSSProperties
            }
        >
            {children}
        </div>
    );
});
