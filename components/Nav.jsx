"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <nav className="flex-between gap-x-1 w-full mb-2 mt-4 max-sm:gap-x-0 min-w-[360px]">
      <Link href="/" className="flex gap-2 flex-center pl-1 max-sm:gap-0">
        <Image
          src="/assets/logo-no-background.svg"
          alt="logo"
          width={90}
          height={50}
          className="object-contain logo-image"
        />
      </Link>
      <Link href="/posts" className="black_btn">
        All Posts
      </Link>

      <div>
        <Link href="/about" className="black_btn">
          About:
        </Link>
      </div>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex items-center gap-3 md:gap-5">
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={50}
                height={50}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={50}
              height={50}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown2(!toggleDropdown2)}
            />

            {toggleDropdown2 && (
              <div className="dropdown2">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown2(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown2(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown2(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
//*max-sm:hidden*//
export default Nav;
