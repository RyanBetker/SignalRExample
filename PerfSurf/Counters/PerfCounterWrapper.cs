using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace PerfSurf.Counters
{
    public class PerfCounterWrapper
    {
        public string Name { get; set; }
        public float Value { get { return _counter.NextValue(); } }

        private PerformanceCounter _counter;

        public PerfCounterWrapper(string name, string category, string counter, string instance = "")
        {
            _counter = new PerformanceCounter(category, name, instance, readOnly: true);

            this.Name = name;
        }
    }
}
