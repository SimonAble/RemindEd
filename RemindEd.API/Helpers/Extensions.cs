﻿using System;
using Microsoft.AspNetCore.Http;

namespace RemindEd.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static int GetAgeFromDOB(this DateTime dobDateTime)
        {
            var age = DateTime.Today.Year - dobDateTime.Year;

            if (dobDateTime.AddYears(age) > DateTime.Today)
                age--;

            return age;
        }
    }
}