"use client";
import LinkBuilder from "@/presentation/components/link";
import Images from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import dashboardLinksData from "./data";

export interface NavLinksProps {
  customers: LinkItem[];
  business: LinkItem[];
  settings: LinkItem[];
}

interface LinkItem {
  icon: StaticImport;
  title: string;
  href?: string;
  isActive?: boolean;
  isProminent?: boolean;
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-section">
        <div className="nav-link nav-link--prominent">
          <div>
            <div className="nav-link-icon-wrapper">
              <Image src={Images.sidenav.organization} alt="icon" />
            </div>
            <p>Select Organization</p>
            <div className="nav-link-icon-wrapper">
              <Image src={Images.sidenav.nav_dropdown} alt="dropdown icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="nav-section nav-section--smallest-margin">
        <NavLinkItem
          props={{
            icon: Images.sidenav.dashboard,
            title: "Dashboard",
            href: "/dashboard",
          }}
        />
      </div>

      <div className="nav-section nav-section--smaller-margin">
        <p className="nav-section-title">Customer</p>
        <ul>
          {dashboardLinksData.customers.map((item, index) => (
            <li key={index}>
              <NavLinkItem props={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section">
        <p className="nav-section-title">Business</p>
        <ul>
          {dashboardLinksData.business.map((item, index) => (
            <li key={index}>
              <NavLinkItem props={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section">
        <p className="nav-section-title">Settings</p>
        <ul>
          {dashboardLinksData.settings.map((item, index) => (
            <li key={index}>
              <NavLinkItem props={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section nav-section--with-divider">
        <NavLinkItem
          props={{
            icon: Images.sidenav.logout,
            title: "Logout",
            href: "/login",
            isProminent: true,
          }}
        />
      </div>

      <div className="nav-footer">
        <span>v1.2.0</span>
      </div>
    </nav>
  );
}

function NavLinkItem({ props }: { props: LinkItem }) {
  return (
    <LinkBuilder
      props={{
        child: (
          <div>
            <div className="nav-link-icon-wrapper">
              <Image src={props.icon} alt="icon" />
            </div>
            <p>{props.title}</p>
          </div>
        ),
        className: `nav-link ${
          props.isActive
            ? "nav-link--active"
            : props.isProminent
            ? "nav-link--prominent"
            : ""
        }`,
        href: props.href,
      }}
    />
  );
}
