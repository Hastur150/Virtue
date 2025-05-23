

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  var rules = {
    createHTML: function(src) {
      return src;
    },
    createScriptURL: function(src) {
      return src;
    }
  };
  var ttPolicy;
  
  try {
   ttPolicy = window.trustedTypes.createPolicy('google-maps-api-loader', rules);
  } catch(e) {
    ttPolicy = rules;
  }
  
  function getScript(src) {
    var a, nonce = ((a = document.querySelector("script[nonce]")) == null ? void 0 : a.nonce) || "";
    var s = document.createElement('script');
    
    s.src = ttPolicy.createScriptURL(src);
    s.nonce = nonce;
    document.head.appendChild(s);
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[null,[["https://khms0.googleapis.com/kh?v=991\u0026hl=en\u0026","https://khms1.googleapis.com/kh?v=991\u0026hl=en\u0026"],null,null,null,1,"991",["https://khms0.google.com/kh?v=991\u0026hl=en\u0026","https://khms1.google.com/kh?v=991\u0026hl=en\u0026"]],null,null,null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=163\u0026hl=en\u0026","https://khms1.googleapis.com/kh?v=163\u0026hl=en\u0026"],null,null,null,null,"163",["https://khms0.google.com/kh?v=163\u0026hl=en\u0026","https://khms1.google.com/kh?v=163\u0026hl=en\u0026"]],null,null,null,null,null,null,null,[["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?hl=en\u0026","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?hl=en\u0026"]]],["en","BD",null,0,null,null,"https://maps.gstatic.com/mapfiles/",null,"https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com",null,"https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",null,"https://www.google.com",1,"https://maps.googleapis.com/maps_api_js_slo/log?hasfast=true",0,0],["https://maps.googleapis.com/maps-api-v3/api/js/59/1","3.59.1"],[792503647],null,"google-maps-embed",null,[35,39,1,2,3,8,15,17,18,20,21,23,26,45,47,48,88,30,10,51,63,68,72,76,85,114,131,136,112],null,null,"onApiLoad",["geometry","search"],null,1,"https://khms.googleapis.com/mz?v=991\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["/maps/vt"],["/maps/vt"],null,null,null,null,null,null,null,null,null,null,["/maps/vt"],"/maps/vt",713000000,713,713465583,1],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"],"https://streetviewpixels-pa.googleapis.com/v1/tile",["https://lh3.googleusercontent.com/","https://lh4.googleusercontent.com/","https://lh5.googleusercontent.com/","https://lh6.googleusercontent.com/"]],null,null,null,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,null,null,null,["59.1"],1,0,[1],"CgAS/S4IyQUSfAgBEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfAgCEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfAgDEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSdggEEnJodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb24tRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfggFEnpodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25Mb3dMaWdodC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJ/CAYSe2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvblNhdGVsbGl0ZS1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJzCAcSb2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJzCAgSb2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJ9CAkSeWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcEFtYmlhY3RpdmUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgScwgKEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfAgLEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgScwgMEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVRlcnJhaW4tRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSdggNEnJodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb24tRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSdggOEnJodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb24tRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfQgPEnlodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBBbWJpYWN0aXZlLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoMBCBASf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcEFtYmlhY3RpdmVMb3dCaXQtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfggREnpodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25Mb3dMaWdodC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJ6CBISdmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVHJhbnNpdEZvY3VzZWQtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgScwgTEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSeQgUEnVodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvdXRlT3ZlcnZpZXctRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgScwgVEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfQgWEnlodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25BbWJpZW50LUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoEBCBcSfWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkFtYmllbnREYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoMBCBkSf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstQmFzZW1hcEVkaXRpbmdTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgScwgaEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSdwgbEnNodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBEYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4En0IHBJ5aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1Sb3V0ZU92ZXJ2aWV3RGFyay1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJ3CB0Sc2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVGVycmFpbkRhcmstRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfggeEnpodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVRyYW5zaXRGb2N1c2VkRGFyay1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJzCB8Sb2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJ3CCASc2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcERhcmstRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSdwghEnNodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBEYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoABCCUSfGh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkhpZ2hEZXRhaWwtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSiQEIJhKEAWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkhpZ2hEZXRhaWxMb3dMaWdodC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJyCCkSbmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVHJhdmVsLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EnYIKhJyaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1UcmF2ZWxEYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4En8IKxJ7aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1OYXZpZ2F0aW9uU2F0ZWxsaXRlLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4En8ILBJ7aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1UZXJyYWluVmVjdG9yQ2xpZW50LUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoMBCC0Sf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVGVycmFpblZlY3RvckNsaWVudERhcmstRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSfQguEnlodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25BbWJpZW50LUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoEBCC8SfWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkFtYmllbnREYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4En0IMBJ5aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1BaXJRdWFsaXR5SGVhdG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBKBAQgxEn1odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLUFpclF1YWxpdHlIZWF0bWFwRGFyay1GZXRjaGFibGVTdHlsZVNldFNkay1jMDRmYjBmYWE1MmEwYzNmOThmOThhMjQ5ZjIzNDU2OBJ6CDISdmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkVnbW0tRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgSggEIMxJ+aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1OYXZpZ2F0aW9uRWdtbUxvd0xpZ2h0LUZldGNoYWJsZVN0eWxlU2V0U2RrLWMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4EoMBCDQSf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkVnbW1TYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstYzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1NjgiIGMwNGZiMGZhYTUyYTBjM2Y5OGY5OGEyNDlmMjM0NTY4KAEycmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy92dC9zeGZvcm1zP3Y9YzA0ZmIwZmFhNTJhMGMzZjk4Zjk4YTI0OWYyMzQ1Njgmc3R5bGVyX3N1YnR5cGU9U1RZTEVSX0xFR0VORF9TVUJUWVBFX1NESzpgCi6AfIB4gHSAcIBsgGiAZIBggFyAWIBUgFCATIBIgESAQIA8gDiANIAwgCyAKIAkEgQIABAAEgQIARABEgQIAhACEg0IAxD///////////8BEg0IBBD+//////////8BOOmOtBY4nf+3FjjriLgWOO7fuRY=",null,1,0.009999999776482582,null,[[[6,"1732152795"]]],1,"async"], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/59/1/search.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/59/1/geometry.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/59/1/main.js");
})();



document.getElementById('contact_form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // 显示加载状态
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> 提交中...';

  try {
      const response = await fetch('/submit-form', {
          method: 'POST',
          body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
          alert(result.message);
          form.reset(); // 清空表单
      } else {
          alert(`提交失败: ${result.error}`);
      }
      
  } catch (error) {
      alert('网络错误，请稍后重试');
  } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="link-effect"><span class="btn-title">提交</span></span><i class="fa-regular fa-arrow-right-long"></i>';
  }
});