type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additinal?: string[]): string {
   return [
      cls, 
      ...additinal.filter(Boolean),
      ...Object.entries(mods)
         .filter(([className, value]) => Boolean(value))
         .map(([className, value]) => className)
   ]
      .join(' ');
}