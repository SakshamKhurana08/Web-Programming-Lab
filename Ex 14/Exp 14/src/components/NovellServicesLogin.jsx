import React from 'react';

const NovellServicesLogin = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Novell Services Login</h2>
      <form>
        <div>
          <label>Username: <input type="text" name="username" /></label>
        </div>
        <div>
          <label>Password: <input type="password" name="password" /></label>
        </div>
        <div>
          <label>City of Employment: <input type="text" name="city" /></label>
        </div>
        <div>
          <label>Web server: 
            <select name="server">
              <option>-- Choose a server --</option>
            </select>
          </label>
        </div>

        <div>
          <p>Please specify your role:</p>
          <label><input type="radio" name="role" value="admin" /> Admin</label><br />
          <label><input type="radio" name="role" value="engineer" /> Engineer</label><br />
          <label><input type="radio" name="role" value="manager" /> Manager</label><br />
          <label><input type="radio" name="role" value="guest" /> Guest</label>
        </div>

        <div>
          <p>Single Sign-on to the following:</p>
          <label><input type="checkbox" name="sso" value="mail" /> Mail</label><br />
          <label><input type="checkbox" name="sso" value="payroll" /> Payroll</label><br />
          <label><input type="checkbox" name="sso" value="selfservice" /> Self-service</label>
        </div>

        <div>
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default NovellServicesLogin;
