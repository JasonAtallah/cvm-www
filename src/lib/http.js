const handleRequest = (reject) => {
  return (xhr, status, err) => {
    if (xhr.status === 401) {
      window.location.href = '/login';
    } else {
      console.error(err.message); // eslint-disable-line
      const error = new Error(err.message);
      error.status = xhr.status;
      reject(error);
    }
  };
};

export const get = (path) => {
  return new Promise((res, rej) => {
    $.ajax({
      method: 'GET',
      url: path,
      error: handleRequest(rej),
      success: res
    });
  });
};

export const post = (path, data) => {
  return new Promise((res, rej) => {
    $.ajax({
      method: 'POST',
      url: path,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify(data),
      error: handleRequest(rej),
      success: res
    });
  });
};

export const file = (path, fileData) => {
  return new Promise((res, rej) => {
    $.ajax({
      method: 'POST',
      enctype: 'multipart/form-data',
      url: path,
      data: fileData,
      cache: false,
      async: true,
      contentType: false,
      processData: false,
      error: handleRequest(rej),
      success: res
    });
  });
};

export const put = (path, data) => {
  return new Promise((res, rej) => {
    $.ajax({
      method: 'PUT',
      url: path,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify(data),
      error: handleRequest(rej),
      success: res
    });
  });
};
