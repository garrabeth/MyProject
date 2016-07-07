using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;


namespace MySite
{
    public class BundleConfig
    {
        public static void RegisterBundles (BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();

            bundles.Add(new ScriptBundle("~/bundles/jquerys").Include(
                "~/scripts/jquery-1.10.2.min.js",
                "~/scripts/jquery-1.10.2.js",
                "~/scripts/jquery-ui.js",
                "~/scripts/jquery-ui.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrapjs").Include(
                "~/scripts/bootstrap.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/functionsjs").Include(
                "~/scripts/functions.js",
                "~/scripts/viewOnScroll.js"));

            bundles.Add(new ScriptBundle("~/bundles/progressbarjs").Include(
                "~/scripts/progressbar.js",
                "~/progressbar.min.js",
                "~/progressbarFunction.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/bootstrap.theme.css",
                "~/Content/Site.css"));
        }
    }
}