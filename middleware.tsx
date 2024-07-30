import { NextResponse, NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Middleware function
export async function middleware(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const url = req.nextUrl.clone();

  // Logika pro přesměrování uživatele, pokud je přihlášen
  if (user) {
    if (url.pathname === "/") {
      // Pokud je uživatel přihlášen a pokouší se přistupovat na domovskou stránku, přesměruj na /dashboard
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }

  // Logika pro přesměrování nepřihlášených uživatelů
  if (!user) {
    if (
      url.pathname.startsWith("/dashboard") ||
      url.pathname.startsWith("/onboarding")
    ) {
      // Pokud uživatel není přihlášen a pokouší se přistupovat na /dashboard nebo /onboarding, přesměruj na /auth/login
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
  }

  // Pokračuj na požadovanou stránku, pokud není provedeno žádné přesměrování
  return NextResponse.next();
}

// Konfigurace middleware pro specifikované cesty
export const config = {
  matcher: ["/", "/dashboard/:path*", "/onboarding/:path*"], // Použití middleware pro všechny požadované cesty
};
