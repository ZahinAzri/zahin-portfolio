import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ImageCardProps {
    title: string;
    imageUrl: string;
    onNext?: () => void;
    onPrev?: () => void;
    onClose?: () => void;
    className?: string;
}

export function ImageCard({ title, imageUrl, onNext, onPrev, onClose, className }: ImageCardProps) {
    return (
        <div className={cn("relative flex flex-col items-center gap-6 p-6 bg-white rounded-[50px] w-full max-w-[810px]", className)}>
            {/* Close Button top left */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 p-2.5 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md backdrop-blur-sm transition-all"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>
            )}

            {/* Image Container */}
            <div className="w-full relative flex justify-center items-center">
                <img
                    src={imageUrl}
                    alt={title}
                    className="max-w-full h-auto max-h-[75vh] rounded-[25px]"
                />
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between w-full px-2 sm:px-6">
                <button
                    onClick={onPrev}
                    className="flex items-center justify-center p-2.5 bg-[#d14e28] text-white rounded-[5px] hover:bg-[#b04020] transition-colors"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <h3 className="text-[#212429] font-medium text-xl sm:text-2xl text-center px-4 font-sans">
                    {title}
                </h3>

                <button
                    onClick={onNext}
                    className="flex items-center justify-center p-2.5 bg-[#d14e28] text-white rounded-[5px] hover:bg-[#b04020] transition-colors"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}
