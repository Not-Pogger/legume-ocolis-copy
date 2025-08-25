# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern website for a local vegetable farm business (Familia Pușcaș) in Ocolis, Maramureș, Romania. The website showcases fresh vegetables and provides contact information for customers. Built with Next.js and Tailwind CSS.

## Tech Stack

- **Next.js 15.5.0** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Context** - State management for internationalization
- **Static Export** - Configured for static site generation (`output: 'export'`)

## Development Commands

Run in root dir:

- **Development server**: `npm run dev` (starts on localhost:3000)
- **Build for production**: `npm run build` (outputs to `/out` directory)
- **Production server**: `npm start` (serves built application)

## Project Architecture

### Directory Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions, translations, and contexts
- `public/images/` - Static assets including vegetable photos
- `out/` - Output files to be uploaded to the static hosting server

### Key Architecture Patterns

**Internationalization**:

- Languages: Romanian (default) and English
- i18n implementation using React Context (`lib/i18n-context.tsx`)
- Translation strings in `lib/translations.ts`
- Language preference stored in localStorage

**Component Structure**:

- Modular components: Hero, Navigation, Products, Gallery, Contact, etc.
- TypeScript interfaces for type safety
- Framer Motion for scroll-triggered animations
- Responsive design with Tailwind breakpoints

**Static Site Generation**:

- Configured for static export in `next.config.ts`
- Unoptimized images for static hosting compatibility
- Trailing slashes enabled for better hosting support

## Configuration

- **Font Setup**: Custom Google Fonts (Poppins, Schibsted Grotesk) configured in layout
- **Image Optimization**: Disabled for static export compatibility
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **Tailwind**: Custom animations and extended theme for branding
